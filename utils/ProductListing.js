
import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { 
    
    View,
    StyleSheet,
    ScrollView,
    Text
} from 'react-native';
import Product_Main_View from './ProductMainView';



const Product_Listing = () => {


    return (
        <ScrollView>
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
};

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
