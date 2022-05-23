
import React,{useEffect, useState} from 'react';
import { 
    
    View, 
    Text, 
    StyleSheet,
    Pressable,
    ImageBackground,
    Image
    
    
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Button, DataTable } from 'react-native-paper';
import {remoteDBItem,StartsSync,localDBWOWDBItem} from '../database/pouchDb';
import { useSelector , useDispatch } from 'react-redux';
import {setTaskId, setItems , setDones} from "../Redux/TaskReducer"
import FImage from '../Components/FastImage'
import FastImage from 'react-native-fast-image'

export default function Added_Product ({navigation}) {


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
                return item.doc
            });
            
            setItemdata(modifiedArr)
            dispatch(setItems(modifiedArr))
            console.log(modifiedArr)
            console.log('modifiedArr')
        }  
    }

    const renderItem = ({ item }) => {
        return (
            <View style={styles.item}>
                <Image 
                style={{width:195 , height:250}}
                resizeMode="cover"
                source={{uri: item.Image}}
                />
                <Text style={styles.title}>
                    {item._id}
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
        width: 100,
        height: 100,
        fontSize: 20,
        position: 'absolute',
        textAlign: 'center',
        alignSelf: 'center',
        color: '#222'
      },
});