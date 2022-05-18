////////////////////////////////////////////////Login Section////////////////////////////////////////////////////
////////////////////////////Customer can either sign in or sign up for new account///////////////////////////////
/////////////////////////////////// to be exported to screencompnents/views /////////////////////////////////////

import React, {useState} from 'react';
import {

  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TextInput,
  ImageBackground,
  Alert,
  TouchableOpacity,

} from 'react-native';
import {remoteDB, remoteDBUser} from '../database/pouchDb';


 function Login_view ({navigation}) {

  // const LoginData = async ()  => {
    
  // }

  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const imagebg = {uri: 'https://i.imgur.com/6YOeUuB.png'};
  

  const LoginData = async () => {
    if((username.length == 0) && (password.length == 0) ){
      console.log('iloveit')
    }else{
        try {
          var doc = await remoteDBUser.get(username);
          console.log(doc)
          // Alert.alert("Succesfull Logging in")
          if(doc.Role == 'Seller'){
            navigation.navigate('SellerTab');

          }else if(doc.Role == 'Customer'){
            navigation.navigate('CustomerTab')
          }else{console.log('happy')}
         
        } catch (err) {
          console.log(err);
          // Alert.alert("Error Logging in")
        }
    }
  }

  // const LoginNavigation = () => {
  //   Alert.alert('Error Test Login ','please ty again later');
  // }


  const onPressHandler = () => {

    navigation.navigate('CreateView');

  }
  

  return (  

      <ImageBackground
         
         source={imagebg} 
         resizeMode="cover" 
         style={styles.bg_image}
      >
        <View style = {styles.innerbody}>

          <Text style = {styles.login_header}> LOGIN </Text>
            <TextInput
                value = {username}
                style = {styles.textinput}
                placeholder = {'username'}
                onChangeText={(value) => setUsername(value)}
               
            />
            <TextInput
                 value = {password}
                style = {styles.textinput}
                secureTextEntry
                placeholder = {'password'}
                onChangeText={(value) => setPassword(value)}
            />

            <Pressable>
              <Text style = {{color: '#F0509D', fontWeight: '500',}}>
                Forgot Password
              </Text>
            </Pressable>

            <Pressable           
            style = {styles.login_button}
            android_ripple= {{color: "#ffa45e", borderRadius: 20,}}
            onPress = {LoginData}
            
            >
              <Text style = {{color: '#e2e2e2', fontWeight: '900',}}> LOGIN </Text>

            </Pressable>

            <Text> ____________________  ♦  ____________________  </Text>

            <Pressable           
            style = {styles.create_account}
            android_ripple= {{color: "#ffa45e", borderRadius: 20,}}
            onPress = {onPressHandler}      
            >
              <Text style = {{color: '#e2e2e2', fontWeight: '900',}}> create account </Text>

            </Pressable>

          </View>
            <Image
              style = {styles.logo}
              source = {{uri: 'https://i.imgur.com/nPZfeIW.png'}}

            />

            <Pressable style = {{
              position: 'absolute',
              bottom:0,
              marginTop: 10,
              marginBottom: 10,
              }}
            >

                <Text style = {{
                      fontSize: 10,
                }}> HELP </Text>

            </Pressable>

      </ImageBackground>


  )
  }
const styles = StyleSheet.create({


    logo: {

      width: 250,
      height: 100,
      position: 'absolute',
      bottom: 30,


    },  

    create_account: {

      backgroundColor: '#ec4176',
      width: 200,
      height: 35,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 15,
      borderRadius: 20,

    },

    login_button: {

      backgroundColor: '#ffa45e',
      width: 150,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
      marginTop: 10,
      marginBottom: 10,

    },

    login_header: {

      fontSize: 25,
      fontWeight: '900',
      color: '#225',
      marginBottom: 15,

    },

    textinput: {

    borderRadius: 10,
    width: 275,
    height: 35,
    marginBottom: 10,
    backgroundColor: '#ffff',


    },

      innerbody: {

        width: 350,
        height: 500,
        alignItems: 'center',
        justifyContent: 'center',
  

    },

    bg_image: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',

    },

    body: {

        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e2e2e2'

    }


})

export default Login_view;