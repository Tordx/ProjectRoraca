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
import Product_Category from '../CustomerScreen/ProductCategory';
import ProductAd from '../Components/StoreAd';
import Image_slider from '../Components/ImageSlider';
import Individual_parcel from '../CustomerScreen/IndividualParcel';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const image = { uri: "https://i.imgur.com/ewqItWK.png" };


 function Default_Screen ({navigation}) {

  const onPressHandler = () => {

    navigation.navigate('LoginView');

  }

  const ProductListView = () => {

    navigation.navigate('StoreList');

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
       <View
       style = {{
        alignContent: 'center',
        justifyContent: 'center',
        margin: 5,
      }}
        
        >
       <FontAwesome5
       
       

       name = {'utensils'}
       size ={15}


       />
       </View>
       
       <TextInput
       
       style = {{top: 3,}}
       placeholder = 'Craving for something?'
       
       
       />
       </View>

<Pressable
style = {{margin: 10, justifyContent: 'center', alignContent: 'center'}}
onPress={onPressHandler}

>

<FontAwesome5

name={'user-circle'}
size = {30}
color ={'#e2e2e2'}

/>

</Pressable>
       
       
</View>

  <ScrollView style = {{backgroundColor: '#e2e2e2'}}>
    <View  style = {styles.body} >
      <Image_slider/>
      <Individual_parcel/>
      <Product_Category/>
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