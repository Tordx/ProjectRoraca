
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
  TouchableOpacity,
 

} from 'react-native';

import {Divider} from 'react-native-paper';
import Image_slider from '../Components/ImageSlider';
import Individual_parcel from '../Components/IndividualParcel';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MainCategory from '../Category/Category';
import LinearGradient from 'react-native-linear-gradient';
import Flight_category from '../Category/FlightCategory';
import Food_category from '../Category/FoodCategory';
import Flight_home from '../Category/FlightCategory_/FlightHome'
import Food_Home from '../Category/FoodCategory/FoodHome';
import roracaads from '../Images/roracaads.png';

export default function Product_view({navigation}){

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
      
        <Image_slider/>
            
        <Divider/>
        <Individual_parcel/>
        <View style = {{padding: 0, marginTop: 30, marginBottom: 20,}}>
        <MainCategory/>
        </View>
        <View style = {{padding: 0, marginTop: 30, marginBottom: 20,}}>
            <Image

              source = {roracaads}
              resizeMode = "cover"
              style = {{width: 380, height: 200,  alignSelf: 'center', borderRadius: 10,}}

            />
            </View>
        <Divider/>
        <View style = {{marginTop: 20,}}> 
               <Flight_category/>
               <Flight_home/>
               <Divider/>
               <Food_category/>
               <Food_Home/>
               <Divider/>
               
              </View>
              <View  style = {{paddingTop: 250,}}>
        </View>
        
    </ScrollView>

    <View style = {{ 
                alignSelf: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
                position: 'absolute',
                top: 0,
                }}>
                  <LinearGradient
                    colors={['#225', 'transparent' ,'transparent']}
                    style={styles.linearGradient}
        >
          <View style = {{bottom: 70, flexDirection: 'row', }}>
            <View style = {styles.topsearchcontainer}>

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
                        placeholder='Search products and services'
            />
            </View>
              <View style = {{
                    alignContent: 'center',
                    justifyContent: 'center',
                    margin: 10,
                    }}>
            
                <Pressable onPress={CheckoutView} >
                    <FontAwesome5
   
                        name = {'shopping-cart'}
                        size ={25}
                        color = 'white'
                    />
                    </Pressable>
            </View>
              <View style = {{
                    alignContent: 'center',
                    justifyContent: 'center',
                    margin: 10,}}>
            <FontAwesome5
   
                        name = {'qrcode'}
                        size ={25}
                        color = 'white'
                    />
            </View>
            </View>
            </LinearGradient>
      </View>
      
</View>
  )

}

  const styles = StyleSheet.create({

    topsearchcontainer: { 

      alignSelf: 'center',
      elevation: 5,
      flexDirection: 'row',
      width: 275,
      height: 35,
      margin: 10,
      borderRadius: 20,
      backgroundColor: '#ffff',
      
      },

    linearGradient: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
      height: 200,
      width: 420,
      flexDirection: 'row',
      position: 'absolute',
      top: 0,
    },

    body: {

      justifyContent: 'center',
      alignContent: 'center',
      backgroundColor: '#e2e2e2',
      flex: 1,
    }



  })