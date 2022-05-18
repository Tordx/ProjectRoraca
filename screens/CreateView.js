//Account creation section
// exported to 
//When User select Create account

import React, {useState} from 'react';
import {

  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TextInput,
  ImageBackground,
  Linking,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {remoteDBUser} from '../database/pouchDb';


function Create_view({navigation}){

    const [fullname, setFullaName] = useState('');
    const [username, setUsername] = useState('');
    const [phonenumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
        return randomNumber.toString()
    };

    const setUser = () => {
        if((username.length == 0) && (fullname.length == 0) ) {
          console.log('ilove')
        }else{
         try {
           var LoginData = {
             _id : username,
             Fullname : fullname,
             Username : username,
             Phonenumber : phonenumber,
             Password : password,
             ConfirmPassword : confirmpassword,
             Role : selectedValue,
           }
           remoteDBUser.put(LoginData)
           .then((response) =>{
             console.log(response)
           })
           .catch(err=>console.log(err))
           navigation.navigate('CustomerTab');
         } catch (error) {
          console.log(error)
         }
         }
        }

    


    const [selectedValue, setSelectedValue] = useState();

    const url= "https://cdn.websitepolicies.com/uploads/n/g/n/a/sample-terms-and-conditions-template.png?w=1140&dpr=1.0"
///////////////////////////////////////////



    const CustomerTab_ = () => {

        navigation.navigate('CustomerTab');

    }

    const SellerTab_ = () => {

        navigation.navigate('SellerTab');

    }

    const DriverTab_ = () => {

        // navigation.navigate('SellerTab');

    }
    
    return(

        

        <View style = {styles.body}>

                <Text style = {styles.createaccount_header}> CREATE ACCOUNT </Text>

                <TextInput  style = {styles.Textinput}
                value={fullname}
                placeholder=' Fullname'
                onChangeText={(value) => setFullaName(value)}
                />
                <TextInput  style = {styles.Textinput}
                value={username}
                placeholder=' Username'
                onChangeText={(value) => setUsername(value)}
                />
                <TextInput  style = {styles.Textinput}
                value={phonenumber}
                placeholder=' Phone number'
                onChangeText={(value) => setPhoneNumber(value)}
                />
                <TextInput  style = {styles.Textinput}
                value={password}
                placeholder=' Password'
                onChangeText={(value) => setPassword(value)}
                />
                <TextInput  style = {styles.Textinput}
                value={confirmpassword}
                placeholder=' Confirm password'
                onChangeText={(value) => setConfirmPassword(value)}
                />
                <View
                
                    style = {{
                        
                        borderRadius: 10,
                        backgroundColor: '#ffff',
                        height: 40,
                        marginBottom: 0,
                    }}> 
                    <Picker
                        selectedValue={selectedValue}
                        mode="dropdown"
                        style={{
                            transform: [
                               { scaleX: 1 }, 
                               { scaleY: 1 },
                            ],
                        width: 300,
                        bottom: 8,
                        color: '#9e9e9e',
                    
                          }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="Select" value="Select" />
                        <Picker.Item label="Customer" value="Customer" />
                        <Picker.Item label="Seller" value="Seller" />
                        <Picker.Item label="Driver" value="Driver" />
                    </Picker>
                </View> 

                <View style={{flexDirection: 'row', top: 25,  }} >
                    <View >
                        <Text style = {{fontSize: 10, color: '#000f'}}> 
                        By signing up, you understand and agree on our
                        </Text>
                    </View>
                    <View style={{marginLeft: 5,}} >
                        <Text style = {{ fontSize: 10, color: '#039016'}}
                        onPress={() => Linking.openURL(url)}>
                        
                        Terms and Conditions </Text>
                        
                    </View>
                </View>

                <Pressable           
            style = {styles.create_account}
            android_ripple= {{color: "#ffa45e", borderRadius: 20,}}
            onPress = {setUser}
            >
              <Text style = {{color: '#e2e2e2', fontWeight: '900',}}> CREATE ACCOUNT </Text>

            </Pressable>
            {/* <Pressable           
            style = {styles.create_account}
            android_ripple= {{color: "#ffa45e", borderRadius: 20,}}
            onPress = {SellerTab_}
            >
              <Text style = {{color: '#e2e2e2', fontWeight: '900',}}> SELLER </Text>

            </Pressable>
            <Pressable           
            style = {styles.create_account}
            android_ripple= {{color: "#ffa45e", borderRadius: 20,}}
            onPress = {DriverTab_}
            >
              <Text style = {{color: '#e2e2e2', fontWeight: '900',}}> DRIVER </Text>

            </Pressable> */}
            

                <Image
                    style = {styles.logo}
                    source = {{uri: 'https://i.imgur.com/nPZfeIW.png'}}

                />

            <View style={{flexDirection: 'row', bottom: -60 }} >
                    <View style={{marginLeft: 5,}} >
                        <Text style = {{ fontSize: 10, color: '#000'}}
                        onPress={() => Linking.openURL(url)}>
                        
                        HELP </Text>
                        </View>
                </View>        

        </View>

    )

}

const styles = StyleSheet.create({

    create_account: {

        backgroundColor: '#ffa45e',
        width: 200,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        borderRadius: 20,
        fontWeight: '900',
        marginTop: 20,
        bottom: -30,
  
      },

    logo: {

        width: 250,
        height: 100,
        bottom:-40,

    },

    Textinput:{

        borderRadius: 10,
        width: 300,
        height: 45,
        marginBottom: 20,
        backgroundColor: '#ffff',


    },

    createaccount_header:{

        fontSize: 30,
        fontWeight: '900',
        marginBottom: 20,
        color: '#225',

    },

    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e2e2e2',

},

})

export default Create_view;