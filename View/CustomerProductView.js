
import React from 'react';
import {

  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TextInput,
  ScrollView,
 

} from 'react-native';
import Divider from 'react-native-divider';
import ProductCategory from '../CustomerScreen/ProductCategory';
import ProductAd from '../Components/StoreAd';
import SlideshowTest from '../Components/Slider';
import Image_slider from '../Components/ImageSlider';
import Individual_parcel from '../CustomerScreen/IndividualParcel';



export function Product_view({navigation}){

  const ProductListView = () => {

    navigation.navigate('StoreList');

  }

  const CheckoutView = () => {

    navigation.navigate('checkout');

  }

  return (

    <View style = {{ flex: 1, height: 50, justifyContent: 'center', alignContent: 'center', backgroundColor: '#225', 
    }
    }>
      


      <View style ={{flexDirection: 'row',}}>

<View  style = {{
           
           width: 275, 
           height: 35,
           borderRadius: 5, 
           margin: 10,
           backgroundColor: '#ffff',
           flexDirection: 'row',
           
         }}>
         
         <Image
         style = {{
         
         width: 30, 
         height: 30, 
         top: 3, }}
         
         source = {{
         uri:'https://cdn0.iconfinder.com/data/icons/food-4/500/Eat_food_fork_knife_lunch_restaurant_plate-512.png'
         
         }}
          />
         
         <TextInput
         
         style = {{top: 3, }}
         placeholder = 'Craving for something?'
         
         
         />
         </View>

         

           

        <Pressable
        pressRetentionOffset
        onPress={CheckoutView}

        >

  <Image
    style = {{width: 30, height: 30, top: 13, left: 10,}}
    source={{uri: 'https://i.imgur.com/34oXxMD.png'}}

  />

</Pressable>

<Pressable>

<Image
style = {{width: 30, height: 30, top: 13, left: 35,}}
source={{uri: 'https://i.imgur.com/z9uaMDs.png'}}

/>

</Pressable>
         
         
</View>

    <ScrollView style = {{backgroundColor: '#e2e2e2'}}>
      <View  style = {styles.body} >
       
        <Image_slider/>
        <Individual_parcel/>
      <Divider style={{ background: 'black' }} variant="middle" />

         <ProductCategory/>


      <Divider style={{ background: 'black' }} variant="middle" />

         <Pressable  
         
         onPress={ProductListView}

         >
            <Text>VIEW ALL</Text>

         </Pressable>
        <ProductAd/>
            
            
        </View>
    </ScrollView>
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