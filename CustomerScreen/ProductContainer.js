//This is where product is contained -  all data of the product is here ///
import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet,
    Image,
    ScrollView,
    Pressable,
} from 'react-native';
import Divider from 'react-native-divider';
import Product_Listing from './ProductListing';
import Product_Main_View from './ProductMainView';
import { useSelector, useDispatch } from 'react-redux';
import { setItems } from '../Redux/TaskReducer';
import { useNavigation } from '@react-navigation/native';

export default function Product_container(){

    const dispatch = useDispatch();
    const SelectedItem = useSelector(state => state.items.SelectedItem);
    const navigation = useNavigation(); 

    

    const checkoutItems = () => {
        const item = SelectedItem
        console.log(item)
        console.log('item')
        dispatch(setItems(item))
        navigation.navigate('checkout')

    }

    return (
        <View style = {{
            flex: 1, 
            justifyContent: 'center', 
            alignContent: 'center',
            backgroundColor: '#e2e2e2'
            }}>
        <ScrollView>
            <Image
            style  = {styles.image}
           resizeMode = 'cover'
           source={{uri: SelectedItem.Image}}
           />
        <Text
        style = {{
            fontSize: 25, 
            margin: 10,
            fontWeight: '500',
        }}
        > {SelectedItem._id}</Text>
         <Text
        style = {{
            fontSize: 20, 
            margin: 10,
            marginTop: -10,
            fontWeight: '400',
        }}
        > {SelectedItem.Price}</Text>
        <Text
        style = {{
            fontSize: 25, 
            margin: 10,
            marginTop: -10,
            fontWeight: '500',
            color: 'orange',
            

        }}
        >{SelectedItem.Preptime}</Text>

        <Divider/>

        <Text
        style = {{
            fontSize: 15,
            margin: 10,
            marginTop: -10,}}>
                <Text style = {{fontWeight: '900'}}> What's in it? - </Text>
            {SelectedItem.Description}
        </Text>
        
        <Divider/>
        {/* <View style  = {{flexDirection: 'row', justifyContent: 'center'}}>
            <Product_Main_View/>
            <Product_Main_View/>
        </View> */}
            <Divider/>

        </ScrollView>
        <View style = {styles.bottomcontainer} >
            <Pressable style = {{

            width: 150,
            height: 50,
            backgroundColor: '#ec4176',
            borderRadius: 15,
            margin: 20,
            justifyContent: 'center',

            }}
            onPress={checkoutItems}
            >
                <Text style = {styles.BottomText} >Add to Cart</Text>

            </Pressable>
            <Pressable style = {{

            width: 150,
            height: 50,
            backgroundColor: '#225',
            borderRadius: 15,
            margin: 20,
            justifyContent: 'center',
            

            }}
            
            >
                <Text style = {styles.BottomText} >Check Out</Text>
            </Pressable>
        </View>

        </View>
    );
};

const styles = StyleSheet.create({

    BottomText: {

        textAlign: 'center',
        alignItems: 'center',
        color: '#e2e2e2',
        fontWeight: '900',
        fontSize: 20,



    },

    bottomcontainer: {
        
        flexDirection: 'row',
        position: 'relative',
        alignSelf: 'center',
        justifyContent:'center',
        width: 415,
        height: 75,
        backgroundColor: '#e2e2e2',
        shadowColor: "#225",
shadowOffset: {
	width: 100,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,

elevation: 24,

    },

    image: {

        width: 410,
        height: 400,
        justifyContent: 'center',
        alignItems: 'center',

    },

    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});


