
import React,{useEffect, useState} from 'react';
import { 
    
    View, 
    Text, 
    StyleSheet,
    Pressable,
    
    
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import {remoteDBItem,StartsSync,localDBWOWDBItem} from '../database/pouchDb';
import { useSelector , useDispatch } from 'react-redux';
import {setTaskId, setItems , setDones} from "../Redux/TaskReducer"

export default function Added_Product () {

    const dispatch = useDispatch();

    const [itemdata,setItemdata] = useState('')

    useEffect(() => {
        getData()
        StartsSync()
      }, []);

    const getData = async() => {
        
            var result = await remoteDBItem.allDocs({
              include_docs: true,
              attachments: true
            });
            if(result.rows){
                let modifiedArr = result.rows.map(function(item){
                return item.id
            });
            
            setItemdata(modifiedArr)
            dispatch(setItems(modifiedArr))
            console.log(modifiedArr)
            console.log('modifiedArr')
        }  
    }
    const renderItem = ({ item }) => {
        return(
            <View style={styles.item}>
                <Text style={styles.title}>
                    {item}
                </Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
            data={itemdata}
            renderItem={renderItem}
            keyExtractor={item => item}
            >       
            </FlatList>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#2c3e50',
    },
    item: {
        // backgroundColor: '',
        padding: 20,
        marginVertical: 0,
        width: 405,
        alignItems: 'center',
    
      },
      title: {
        fontSize: 32,
        textAlign: 'center',
        color: '#222'
      },
});