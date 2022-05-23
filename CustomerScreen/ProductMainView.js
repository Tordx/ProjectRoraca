//import liraries
import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet,
    Pressable,
    Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProductImage = {uri: 'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2Farchive%2Fc54907276a7cb6e0545ae2128bdc984e86b6cb9d'}

const Product_Main_View = () => {

    const navigation = useNavigation();

    return (

        <View style={styles.container}>
              <Pressable
                style = {{backgroundColor: '#fff',
                width: 195,
                height: 250,
                borderRadius: 10,
                margin: 5,
                }}
                onPress = {() => {
                    navigation.navigate('ProductContainer')}}>
                <Image
                 style = {{ flex: 1, justifyContent: 'center', borderRadius: 10, }}
                
                 source = {ProductImage}
                />
                
                    <Text style = {styles.text}> Alfredo Pasta </Text>
                    <Text style = {{color: 'orange', margin: 5, marginTop: -5,}}> ★★★★★ </Text>
                    <Text style = {{margin: 5, marginTop: -5,}}> $47.00 </Text>
               </Pressable>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Product_Main_View;
