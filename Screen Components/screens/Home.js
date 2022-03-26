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

} from 'react-native';

const image = { uri: "https://i.imgur.com/ewqItWK.png" };

 function Home_view ({navigation}) {

  const onPressHandler = () => {

    navigation.navigate('LoginView');

  }

  return (  

      <View style ={styles.body}>

        <ImageBackground 
          source={image} 
          resizeMode="cover" 
          style={styles.bg_image}
        >

          <View style = {styles.loginview_button}>

            <TextInput 
                style = {{
                
                width: 350, 
                height: 37, 
                borderWidth: 1, 
                marginBottom: 60, 
                borderRadius: 10, 
                justifyContent: 'flex-end',
                backgroundColor: '#ffff',
                textAlign: 'center'
              
                }}

                placeholder = 'Track your Order/Parcel'


            />
            
          <Pressable 
          style = {styles.login_button}
          android_ripple= {{color: "#ffa45e", borderRadius: 20,}}
          onPress ={onPressHandler}
          >
                <Text style = {styles.login_text}>
                  LOGIN / REGISTER
                </Text>
          </Pressable>
        </View>

        <View style = {styles.home_logo}>
            <Image
              style = {styles.logo}
              source = {{uri: 'https://i.imgur.com/aMi2af5.png'}}

            />

        </View>

          <Pressable >
            <Text style = {styles.info_text}>
              HELP
            </Text>
          </Pressable>

        </ImageBackground>
        
      </View> 

  )
  }
const styles = StyleSheet.create({

  loginview_button: {

    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    bottom: -270,


  },

  login_text: {

    color: '#e2e2e2',
    fontWeight: 'bold',

  },

  login_button: {

    backgroundColor: '#225',
    width: 150,
    height: 35,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,


  },

  info_text:{

    
    bottom:0,
    justifyContent: 'center',
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: '500',
    fontSize: 10,

  },


  bg_image: {
    flex: 1,
    justifyContent: 'center'
  },



  logo: {

    width: 270,
    height: 100,
    position: 'absolute',
    bottom:0



  },

  home_logo: {

    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 10,
  },
    


  body: {

    flex: 1,
    backgroundColor: '#e2e2e2',


  }


})

export default Home_view;