import React from 'react';
import { 
    
    View,
    Text,
    StyleSheet,
    Pressable,
    Image, 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Product_Category() {

  const navigation = useNavigation(); 

  const Liquors = () => {
    console.log('yes')
    navigation.navigate('Liquors')
  }
  const Snacks = () => {
    navigation.navigate('Snacks')
  }
  const Meals = () => {
    navigation.navigate('Meal')
  }
  const Fruits = () => {
    navigation.navigate('Fruits')
  }
  const Drinks = () => {
    navigation.navigate('Drinks')
  }
  const FastFood = () => {
    navigation.navigate('FastFood')
  }
  const Pastry = () => {
    navigation.navigate('Pastry')
  }
  const Vegan = () => {
    navigation.navigate('Vegan')
  }

  

  return (

      <View style = {{alignItems: 'center'}}>
      <View style ={{flexDirection: 'row',}} >
      <View style = {{alignItems: 'center'}} >
        <Pressable style = {styles._cell1}
        onPress={Liquors}
        // onPress={() => {
        //   navigation.navigate('_ProductCategory');
        // }}
        >
          
      <Image
    
    style = {{ flex: 1, justifyContent: 'center', borderRadius: 10, }}
    resizeMode='cover'
    source = {{uri: 'https://images.pexels.com/photos/1089930/pexels-photo-1089930.jpeg'}}
    
/>
      
        </Pressable>
        
        <Text>Liquor & Beer</Text>
        </View>  
        <View style = {{alignItems: 'center'}} >
        <Pressable style = {styles._cell1}
        onPress={Snacks}
        >
          
      <Image
    
    style = {{ flex: 1, justifyContent: 'center', borderRadius: 10, }}
    resizeMode='cover'
    source = {{uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-homemade-pizza-horizontal-1542312378.png'}}

/>
      
        </Pressable>
        <Text>Snacks</Text>
        </View>    
        <View style = {{alignItems: 'center'}} >
        <Pressable style = {styles._cell1}
        onPress={Meals}
        >
          
      <Image
    
    style = {{ flex: 1, justifyContent: 'center', borderRadius: 10, }}
    resizeMode='cover'
    source = {{uri: 'https://media.istockphoto.com/photos/restaurant-healthy-food-delivery-in-take-away-boxes-picture-id1165063882?k=20&m=1165063882&s=612x612&w=0&h=ZECAZwa2RRRBHWymJTC06emyEzyQ_gu6eIvucJ4-nB4='}}

/>
      
        </Pressable>
        <Text>Meal</Text>
        </View>    
        <View style = {{alignItems: 'center'}} >
        <Pressable style = {styles._cell1}
        onPress={Fruits}
        >
          
      <Image
    
    style = {{ flex: 1, justifyContent: 'center', borderRadius: 10, }}
    resizeMode='cover'
    source = {{uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/assortment-of-colorful-ripe-tropical-fruits-top-royalty-free-image-995518546-1564092355.jpg?crop=0.982xw:0.736xh;0,0.189xh&resize=980:*'}}

/>
      
        </Pressable>
        <Text>Fruits</Text>
        </View>    
      </View>

  <View style = {{alignContent: 'center'}}>
      <View style ={{flexDirection: 'row',}} >
      <View style = {{alignContent: 'center'}} >
        <Pressable style = {styles._cell1} 
        onPress={Drinks}
        >
          
      <Image
    
    style = {{ flex: 1, justifyContent: 'center', borderRadius: 10, }}
    resizeMode='cover'
    source = {{uri: 'https://sugbo.ph/wp-content/uploads/2019/05/popular-milktea-cebu2-768x425.jpg'}}

/>
      
        </Pressable>
        <Text style = {{textAlign: 'center'}}>Drinks</Text>
        </View>  
        <View style = {{alignItems: 'center'}} >
        <Pressable style = {styles._cell1}
        onPress={FastFood}
        >
          
      <Image
    
    style = {{ flex: 1, justifyContent: 'center', borderRadius: 10, }}
    resizeMode='cover'
    source = {{uri: 'https://usercontent.one/wp/www.alltopeverything.com/wp-content/uploads/2020/08/fast-food-chains.png'}}

/>
      
        </Pressable>
        <Text>Fast Food</Text>
        </View>    
        <View style = {{alignItems: 'center'}} >
        <Pressable style = {styles._cell1}
        onPress={Pastry}
        >
          
      <Image
    
    style = {{ flex: 1, justifyContent: 'center', borderRadius: 10, }}
    resizeMode='cover'
    source = {{uri: 'https://cdn.shopify.com/s/files/1/1165/4656/products/French_bread_5000x.jpg'}}

/>
      
        </Pressable>
        <Text>Pastry</Text>
        </View>    
        <View style = {{alignItems: 'center'}} >
        <Pressable style = {styles._cell1} 
        onPress={Vegan}
        >
          
      <Image
    
    style = {{ flex: 1, justifyContent: 'center', borderRadius: 10, }}
    resizeMode='cover'
    source = {{uri: 'https://www.hopkinsmedicine.org/-/media/images/health/3_-wellness/food-and-nutrition/vegan-tacos-hero.ashx?h=500&iar=0&mh=500&mw=1300&w=1297&hash=9FFBF481E10B8D94A13EFA35834EC06C'}}

/>
        </Pressable>
        <Text>Vegan</Text>
        </View>    
      </View>
  </View>
  </View>

    );
};

const styles = StyleSheet.create({
  _cell1:{

    backgroundColor: '#225',
    width: 75,
    height: 75,
    borderRadius: 10,
    margin: 10,
  }
});
