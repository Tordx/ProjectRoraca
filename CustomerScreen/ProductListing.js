
import { NavigationContainer } from '@react-navigation/native';
import React, { useState,useEffect } from 'react';
import { 
    
    View,
    StyleSheet,
    ScrollView,
    Text
} from 'react-native';
import Product_Main_View from './ProductMainView';
import { FlatList } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import {remoteDBItem,StartsSync,localDBWOWDBItem} from '../database/pouchDb';
import { useSelector , useDispatch } from 'react-redux';
import {setTaskId, setItems , setDones} from "../Redux/TaskReducer"



const Product_Listing = () => {


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

{/* <ScrollView>
<Text style = {{
   fontSize: 20,
   margin: 20,
}}>Appetizers</Text>
<View style  = {{flexDirection: 'column', justifyContent: 'center'}}>
    <View style  = {{flexDirection: 'row', justifyContent: 'center'}}>
        <Product_Main_View/>
        <Product_Main_View/>    
    </View>
    <View style  = {{flexDirection: 'row', justifyContent: 'center'}}>
        <Product_Main_View/>
        <Product_Main_View/>    
    </View>
    <View style  = {{flexDirection: 'row', justifyContent: 'center'}}>
        <Product_Main_View/>
        <Product_Main_View/>    
    </View>
    <View style  = {{flexDirection: 'row', justifyContent: 'center'}}>
        <Product_Main_View/>
        <Product_Main_View/>    
    </View>
</View>

</ScrollView>

);
}; */}

const styles = StyleSheet.create({

    text: {

        margin: 5,
        fontSize: 15,

    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

//make this component available to the app
export default Product_Listing;
