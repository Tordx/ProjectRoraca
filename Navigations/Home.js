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
import { useNavigation } from '@react-navigation/native';

 function Default_Screen ({navigation}) {

  const Login = () => {

    navigation.navigate('LoginView')

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
            <Product_Category
            
            

            />
            <Divider/>
          </View>

            <Image
                  style = {{height: 150, width: 380, alignSelf: 'center', margin: 5, borderRadius: 20,}}
                  source = {{uri: 'https://scontent.fcrk4-1.fna.fbcdn.net/v/t1.6435-9/87185544_903521310080816_3768760250925056000_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=2c4854&_nc_eui2=AeH33v83fOcWZXfgOUupcPiAlEvD4XdzqreUS8Phd3Oqt5xUnCLXLheRG2D_7OzrwglIbU_CZQccixU5tZv-ubsy&_nc_ohc=oxbjui3VDRoAX9PiMJe&_nc_ht=scontent.fcrk4-1.fna&oh=00_AT9kWtyAB_1PtiXjfvrhlIYm0g3axjbsah8HmpGfemxvfg&oe=62B108CD'}}
                />
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
          <View
            style = {{ 
            alignSelf: 'center',
            position: 'absolute',
            bottom: 100,
            }}>
            <Pressable
            onPress = {Login}>
              <Text 
                style = {{ 
                alignSelf: 'center',
                color: '#141414',
                fontWeight: '600',
                fontStyle: 'italic'
                
            
                }}>
                Login or Create Account
              </Text>
            </Pressable>
          </View>
          
          <Image
                  style = {{height: 100, width: 250, alignSelf: 'center', margin: 5, borderRadius: 20, 
                  position: 'absolute',
                  bottom: 0,}}
                  source = {{uri: 'https://i.imgur.com/4GH79fj.png'}}
                />
    </View>
  )
  }
const styles = StyleSheet.create({

  
  
  body: {

    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#e2e2e2',
    flex: 1,
  }


})

export default Default_Screen;