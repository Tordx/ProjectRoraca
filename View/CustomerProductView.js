
import React, {useEffect} from 'react';
import {

  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TextInput,
  ScrollView,
  BackHandler,
 

} from 'react-native';
import Divider from 'react-native-divider';
import Product_Category from '../CustomerScreen/ProductCategory';
import Store_Ad from '../Components/StoreAd';
import Image_slider from '../Components/ImageSlider';
import Individual_parcel from '../Components/IndividualParcel';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


export function Product_view({navigation}){

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true)
    return () => backHandler.remove()
  }, [])


  const ProductListView = () => {

    navigation.navigate('StoreList');

  }

  const CheckoutView = () => {

    navigation.navigate('checkout');

  }

  return (

    <View style = {styles.body}>
          
    <ScrollView style = {{backgroundColor: '#e2e2e2'}}>
      <Divider/>
      <Divider/>
      <View  style = {styles.body} >

        <Image
              style = {{height: 100, width: 380, alignSelf: 'center', margin: 5, borderRadius: 20,}}
              source = {{uri: 'https://i.imgur.com/8IkDdx0.png'}}
        />
            
        <Divider/>
        <Individual_parcel/>
        <Product_Category/>
        <Divider/>

        <Text> VIEW ALL </Text>
        <Store_Ad/>
        <Store_Ad/>
        <Store_Ad/>

        
      </View>

        
    </ScrollView>

    <View style = {{ 
                alignSelf: 'center',
                elevation: 5,
                flexDirection: 'row',
                width: 325,
                height: 35,
                margin: 15,
                borderRadius: 20,
                backgroundColor: '#ffff',
                position: 'absolute',
                top: 0,
                }}>

                <View style = {{
                    alignContent: 'center',
                    justifyContent: 'center',
                    margin: 5,
            }}>
                    <FontAwesome5
   
                        name = {'search'}
                        size ={15}
                    />
                </View>

                    <TextInput style = {{top: 3,}}
                        placeholder='Search our foodlane'
            />
      </View>
</View>
  )

}

  const styles = StyleSheet.create({

   

    body: {

      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#e2e2e2',
      flex: 1,
    }



  })