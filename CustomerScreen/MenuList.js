import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet,
    ImageBackground,
    Pressable,
    ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Product_Listing from './ProductListing';

const Appetizers = {uri: 'https://static.onecms.io/wp-content/uploads/sites/24/2021/04/13/KD147-At-Home-Menu-Appetizers-2000.jpg'}

const Menu_List = () => {

    


    return (
        <ScrollView>
        <Pressable style = {{ justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,}}
        onPress = {()=> {
            navigation.navigate('ProductListing');
        }}
        >
        <Product_Listing/>
        </Pressable>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    
    OverlayText:{
        position: 'absolute',
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0, 
        justifyContent: 'center', 
        alignItems: 'center',
    },

    ItemCategory: {

        justifyContent: 'center',
        alignItems: 'center',
        width: 400,
        height: 150,
        borderRadius: 20,
        margin: 5,

    },

    coverphoto: {

        width: 500,
        height: 175,

    },
})

export default Menu_List;
