//Default view for new users or about to login
import React from 'react';
import {

  View,
  StyleSheet,
  Image,
  ImageBackground, 
  Pressable,
  TextInput,
  ScrollView,
  Text,
  SafeAreaView,

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

export default function Default_Screen ({navigation}) {


  const Login = () => {

    navigation.navigate('LoginView')

  }

  return (

    <SafeAreaView style = {styles.body}>

      
        <ScrollView 
        showsVerticalScrollIndicator = {false}
        overScrollMode = 'always'
        style = {{backgroundColor: '#e2e2e2'}}>
          <View  style = {styles.body2} >
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
          </View>
              <View style = {{marginTop: 20,}}>
                <Food_category/>
                <Food_Home/>
                <Divider/>
                <Flight_category/>
                <Flight_home/>
                <Divider/>
              </View>
              <View  style = {{paddingTop: 250,}}>
              </View>
                
                
        </ScrollView>

        
        <LinearGradient
                    colors={['#225', 'transparent' ,'transparent']}
                    style={styles.linearGradient2}
        >
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
          </LinearGradient> 
          <LinearGradient
                    colors={['transparent' ,'#e2e2e2', ]}
                    style={styles.linearGradient}
          >
          <View
            style = {{ 
            alignSelf: 'center',
            position: 'absolute',
            bottom: 100,
            elevation: 5,
            }}>

          
            <Pressable
            onPress = {Login}>
              <Text 
                style = {{ 
                alignSelf: 'center',
                color: '#141414',
                fontWeight: '600',
                fontStyle: 'italic',
                fontSize: 15,
            
                }}>
                Login or Create Account
              </Text>
            </Pressable>
          </View>
            <Text style = {{

              fontFamily: 'bauhaus93',
              fontSize: 95, 
              textAlign: 'center', 
              margin: 5, 
              borderRadius: 20, 
              color: '#ffa45e',
              
            bottom: 0,
            position: 'absolute', 
              }}>ror<Text style  = {{color: '#225'}}>aca</Text>
            </Text>
        </LinearGradient>
    </SafeAreaView  >
  )
  }
const styles = StyleSheet.create({

  linearGradient2: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    width: 411,
    position: 'absolute',
    top: 0,
    padding: 0,
  },

  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    width: 420,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
  },
  
  body: {

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e2e2e2',
    flex: 1,
  },

  body2: {

    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#e2e2e2',
    flex: 1,
  }


}
)