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

    const ProductImage = {uri: 'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2Farchive%2Fc54907276a7cb6e0545ae2128bdc984e86b6cb9d'}
    const Title = 'Chicken Alfredo Pasta'
    const Price = '$47.00'
    const Rating = '★★★★★'
    const Description = '  A freaking nice pasta dish that would definitely make you droll, freshly homemade pasta with a savoury cream topped with seared chicken and finished with parmesan and parsley '


const Product_container = () => {
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
           source={ProductImage}

           />
        <Text
        style = {{
            fontSize: 25, 
            margin: 10,
            fontWeight: '500',
        
        }}
        > {Title}</Text>
         <Text
        style = {{
            fontSize: 20, 
            margin: 10,
            marginTop: -10,
            fontWeight: '400',

        
        }}
        > {Price}</Text>

        <Text
        style = {{
            fontSize: 25, 
            margin: 10,
            marginTop: -10,
            fontWeight: '500',
            color: 'orange',
            
        
        }}
        >{Rating}</Text>

        <Divider/>

        <Text
        style = {{
            fontSize: 15,
            margin: 10,
            marginTop: -10,}}>
                <Text style = {{fontWeight: '900'}}> What's in it? - </Text>
            {Description}
        </Text>
        
        <Divider/>
        <View style  = {{flexDirection: 'row', justifyContent: 'center'}}>
            <Product_Main_View/>
            <Product_Main_View/>
        </View>
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

            }}>
                <Text style = {styles.BottomText} >Add to Cart</Text>

            </Pressable>
            <Pressable style = {{

            width: 150,
            height: 50,
            backgroundColor: '#225',
            borderRadius: 15,
            margin: 20,
            justifyContent: 'center',


            }}>
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
        alignItems: 'center',
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

export default Product_container;
