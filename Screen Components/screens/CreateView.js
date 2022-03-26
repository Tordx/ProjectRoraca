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


function Create_view({navigation}){

    const [selectedValue, setSelectedValue] = useState();

    const url= "https://cdn.websitepolicies.com/uploads/n/g/n/a/sample-terms-and-conditions-template.png?w=1140&dpr=1.0"

    const onPressHandler = () => {

        navigation.navigate('TabView');

    }
    
    return(

        

        <View style = {styles.body}>

                <Text style = {styles.createaccount_header}> CREATE ACCOUNT </Text>

                <TextInput  style = {styles.Textinput}
                
                placeholder=' Fullname'

                />
                <TextInput  style = {styles.Textinput}
                
                placeholder=' Username'

                />
                <TextInput  style = {styles.Textinput}
                
                placeholder=' Phone number'
                />

                <TextInput  style = {styles.Textinput}
                
                placeholder=' Password'
                />

                <TextInput  style = {styles.Textinput}
                
                placeholder=' Confirm password'
                />
                <View
                
                    style = {{
                        
                        borderRadius: 10,
                        backgroundColor: '#ffff',
                        height: 35,
                        marginBottom: 25,
                    }}> 
                    <Picker
                        selectedValue={selectedValue}
                        mode="dropdown"
                        style={{
                            transform: [
                               { scaleX: 1 }, 
                               { scaleY: 1 },
                            ],
                        width: 250,
                        bottom: 10,
                        color: '#9e9e9e',
                    
                          }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        
                        <Picker.Item label="Customer" value="CS" />
                        <Picker.Item label="Seller" value="SL" />
                        <Picker.Item label="Driver" value="DR" />
                    </Picker>
                </View> 

                <View style={{flexDirection: 'row',  }} >
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
            onPress = {onPressHandler}
            >
              <Text style = {{color: '#e2e2e2', fontWeight: '900',}}> SIGN UP </Text>

            </Pressable>

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
        width: 150,
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
        width: 250,
        height: 35,
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