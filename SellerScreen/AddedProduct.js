
import React,{useEffect, useState} from 'react';
import { 
    
    View, 
    Text, 
    StyleSheet,
    Pressable,
    ImageBackground
    
    
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Button, DataTable } from 'react-native-paper';
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
            numColumns = {2}
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
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#2c3e50',
    },
    item: {
        backgroundColor: '#fff',
            width: 195,
            height: 250,
            borderRadius: 10,
            margin: 5,
    
      },
      title: {
        fontSize: 15,
        position: 'absolute',
        bottom: 20,
        textAlign: 'center',
        alignSelf: 'center',
        color: '#222'
      },
});