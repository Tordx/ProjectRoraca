//import liraries
import React, { Component } from 'react';
import { 

    View,
    Text, 
    StyleSheet,
    ScrollView,
    TouchableOpacity,

} from 'react-native';
import { TextInput } from 'react-native-paper';

// create a component
const IP_form = () => {
    return (
        
        <View style = {styles.container} >
            <ScrollView>
            
                <Text style = {{textAlign: 'center', color: '#141414', fontWeight: '900', fontSize: 17,}}> SEND PACKAGE </Text>
                <View style = {styles.TextInput} >
                <TextInput
                   label="Sender Name"
                    theme={{    
                        colors: {
                          primary: '#225'
                        }
                      }}

                />
                </View>
                <View style = {styles.TextInput} >
                <TextInput
                   label="Receiver Name"
                    theme={{    
                        colors: {
                          primary: '#225'
                        }
                      }}

                />
                </View>
                <View style = {styles.TextInput} >
                <TextInput
                   label="Receiver Phone number"
                    theme={{    
                        colors: {
                          primary: '#225'
                        }
                      }}

                />
                </View>
                <View style = {styles.TextInput} >
                <TextInput
                   label="Address"
                    theme={{    
                        colors: {
                          primary: '#225'
                        }
                      }}

                />
                </View>
                <View style = {styles.TextInput} >
                <TextInput
                   label="Contents"
                    theme={{    
                        colors: {
                          primary: '#225'
                        }
                      }}

                />
                </View>
                <View style = {styles.TextInput} >
                <TextInput
                   label="Box/Pouch"
                    theme={{    
                        colors: {
                          primary: '#225'
                        }
                      }}

                />
                </View>
                <View style = {styles.TextInput} >
                <TextInput
                   label="Weight"
                    theme={{    
                        colors: {
                          primary: '#225'
                        }
                      }}

                />
                </View>
                <View style = {styles.TextInput} >
                <TextInput
                   label="Preffered vehicle"
                    theme={{    
                        colors: {
                          primary: '#225'
                        }
                      }}
                
                />
                </View>
                <View style = {styles.TextInput} >
                <TextInput
                   label="Declared value"
                    theme={{    
                        colors: {
                          primary: '#225'
                        }
                      }}

                />
                </View>
            </ScrollView>
            <TouchableOpacity>
                <View style = {styles.button} >
                    <Text style = {{textAlign: 'center', color: 'white', fontSize: 17,}}>
                        SUBMIT
                    </Text>
                </View>
            </TouchableOpacity>
            
            </View>
    );
};

// define your styles
const styles = StyleSheet.create({

    TextInput: {

        margin: 25,
        width: 400,
        height: 40  ,
        borderRadius: 20,
        backgroundColor: '#fff',
        alignSelf: 'center',
        justifyContent: 'center',
    },

    button: {

        width: 200,
        height: 60,
        borderRadius: 20,
        backgroundColor: '#226',
        alignSelf: 'center',
        justifyContent: 'center',
        margin: 5,


    },

    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center'

    },
});

//make this component available to the app
export default IP_form;
