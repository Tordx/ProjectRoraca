//Default view for new users or about to login
import React from 'react';
import {

  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground, 
  Pressable,
  TextInput,
  ScrollView,

} from 'react-native';
import Divider from 'react-native-divider';
import ProductCategory from '../utils/ProductCategory';
import ProductAd from '../utils/StoreAd';
import Image_slider from '../utils/ImageSlider';
import Individual_parcel from '../utils/IndividualParcel';

const image = { uri: "https://i.imgur.com/ewqItWK.png" };


 function Default_Screen ({navigation}) {

  const onPressHandler = () => {

    navigation.navigate('LoginView');

  }

  const ProductListView = () => {

    navigation.navigate('ProductList');

  }
  
  return (  

    <View style = {{ flex: 1, height: 50, justifyContent: 'center', alignContent: 'center', backgroundColor: '#225',
  }
  }>

    
    
    <View style = {{flexDirection: 'row', top: 2, }}>

<View  style = {{
         
         width: 325, 
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
       
       }}/>
       
       <TextInput
       
       style = {{top: 3,}}
       placeholder = 'Craving for something?'
       
       
       />
       </View>

<Pressable
style = {{margin: 15, justifyContent: 'center', alignContent: 'center'}}
onPress={onPressHandler}

>

<Image
style = {{width: 30, height: 30,}}
source={{uri: 'https://i.imgur.com/I1Pn0ba.png'}}

/>

</Pressable>
       
       
</View>

  <ScrollView style = {{backgroundColor: '#e2e2e2'}}>
    <View  style = {styles.body} >
      <Image_slider/>
      <Individual_parcel/>
      <ProductCategory
      />
    <Divider/>
      <Pressable
      onPress={ProductListView}
      >
        <Text > VIEW ALL </Text>
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

export default Default_Screen;