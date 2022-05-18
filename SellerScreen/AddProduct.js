import React, {useState} from 'react';
import { 
    
    View,
    Text, 
    StyleSheet,
    TextInput,
    Pressable,
} from 'react-native';
import {remoteDBItem} from '../database/pouchDb';



 const Add_Product = ({navigation}) => {

    const [productname, setProductname] = useState('');
    const [price, setPrice] = useState('');
    const [deliveryfee, setDeliveryfee] = useState('');
    const [description, setDescription] = useState('');

    const setItem = () => {
        if(productname.length == 0) {
          console.log('ilove')
        }else{
         try {
           var NewProduct = {
             _id : productname,
             Price : price,
             Deliveryfee : deliveryfee,
             Description : description,
            
           }
           remoteDBItem.put(NewProduct)
           .then((response) =>{
             console.log(response)
             navigation.navigate('SellerTab');
           })
           .catch(err=>console.log(err))
        //    navigation.navigate('CustomerTab');
         } catch (error) {
          console.log(error)
         }
         }
        }



    return (
        <View style={styles.container}>
            <Text
            style = {{fontSize: 20, fontWeight: 'bold'}}
            > Add Product </Text>
            <View style = {styles.TextInput}>
                <TextInput
                value = {productname}
                placeholder='Product Name'
                onChangeText={(value) => setProductname(value)}

                />
                </View>
                <View style = {styles.TextInput}>
                <TextInput
                value = {price}
                placeholder='Price'
                onChangeText={(value) => setPrice(value)}
                />
                </View>
                <View style = {styles.TextInput}>
                <TextInput
                value = {deliveryfee}
                placeholder='Delivery fee'
                onChangeText={(value) => setDeliveryfee(value)}
                />
                </View>
                <View style = {styles.TextInput}>
                <TextInput
                value = {description}
                placeholder='Description'
                onChangeText={(value) => setDescription(value)}
                />
            </View>
            <Pressable
            style = {{
                justifyContent: 'center',
                alignItems: 'center',
                height: 50,
                width: 500,
                backgroundColor: '#ec4176',
                borderRadius: 20,
                position: 'absolute',
                bottom: 0,
            }}
            onPress = {setItem}
            >
                <Text
                style = {{color: 'white', fontWeight: '900'}}
                > ADD </Text>
            </Pressable>
        </View>
        
    );
};

const styles = StyleSheet.create({

    TextInput: {

        margin: 10,
        width: 300,
        height: 40  ,
        borderRadius: 10,
        backgroundColor: '#fff',

    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e2e2e2',
    },
});

export default Add_Product;