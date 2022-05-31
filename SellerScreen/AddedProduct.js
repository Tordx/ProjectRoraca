
import React,{useEffect, useState} from 'react';
import { 
    
    View, 
    Text, 
    StyleSheet,
    Pressable,
    ImageBackground,
    Image,
    TouchableOpacity
    
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Button, DataTable } from 'react-native-paper';
import {remoteDBItem,SyncItems,localDBWOWDBItem, remoteDBOrder} from '../database/pouchDb';
import { useSelector , useDispatch } from 'react-redux';
import {setTaskId, setItems , setDones, setSelectedItem , setOrders} from "../Redux/TaskReducer"
import FImage from '../Components/FastImage'
import FastImage from 'react-native-fast-image'
import { useNavigation } from '@react-navigation/native';


export default function Added_Product ({}) {

    const navigation = useNavigation(); 
    const dispatch = useDispatch();

    const [itemdata,setItemdata] = useState('')

    useEffect(() => {
        getData()
        SyncItems()
        orders()
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
    const orders = async() => {
        try {
            var result = await remoteDBOrder.allDocs({
              include_docs: true,
            });
            dispatch(setOrders(result.rows))
            console.log(result)
            console.log('result')
          } catch (err) {
            console.log(err);
          }
    }
    

    const selectedItem = (item) => {
        let selectedItemId = item
        dispatch(setSelectedItem(selectedItemId))
        console.log(selectedItemId)
        console.log('selectedItemId')
        navigation.navigate('UpdateItem')
    }

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => selectedItem(item)}>
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
            </TouchableOpacity>
        )
    }

    
    return (
        <View style={styles.container}>
            <FlatList
            numColumns = {2}
            data={itemdata}
            renderItem={renderItem}
            keyExtractor={item => String(item._id)}
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