import React from 'react';
import { 
    
    View,
    Text, 
    StyleSheet,
    Pressable,
    ScrollView,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import { Modal_apsg } from '../Components/Modalapsg';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

 const Add_Product = () => {

    const [text, setText] = React.useState("");

    return (
        <View style={styles.container}>
            <ScrollView>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text
            style = {{fontSize: 20, fontWeight: 'bold', marginTop: 20,}}
            > Add Product </Text>
            <View style = {styles.TextInput}>
              <View
                    style = {{
                    alignContent: 'center',
                    justifyContent: 'center',
                    margin: 5,
                  }}
        
                    >
                    <FontAwesome5
                      name = {'hamburger'}
                      size ={15}
                    />
                </View>
                <TextInput
                   label="Product Name"
                    theme={{    
                        colors: {
                          primary: '#225'
                        }
                      }}

                />
                </View>
                <View style = {styles.TextInput}>
                  <View
                    style = {{
                    alignContent: 'center',
                    justifyContent: 'center',
                    margin: 5,
                  }}
        
                    >
                    <FontAwesome5
                      name = {'file'}
                      size ={15}
                    />
                </View>
                <TextInput
                
                mode ='Outlined'
                multiline
                theme={{    
                    colors: {
                      primary: '#225'
                    }
                  }}
                label="Description"
                />
                
                </View>
                <View style = {styles.TextInput}>
                  <View
                    style = {{
                    alignContent: 'center',
                    justifyContent: 'center',
                    margin: 5,
                  }}
        
                    >
                    <FontAwesome5
                      name = {'bookmark'}
                      size ={15}
                    />
                  </View>
                <TextInput
                
                
                  label="Category"
                  theme={{    
                    colors: {
                      primary: '#225'
                      }
                  }}

                />
                </View>
                <View style = {styles.TextInput}>
                  <View
                    style = {{
                    alignContent: 'center',
                    justifyContent: 'center',
                    margin: 5,
                  }}
        
                    >
                    <FontAwesome5
                      name = {'hand-holding-usd'}
                      size ={15}
                    />
                </View>
                <TextInput 
                keyboardType='numeric'
                label="Price"
                theme={{    
                    colors: {
                      primary: '#225'
                    }
                  }}

                />
                </View>
                <View style = {styles.TextInput}>
                <View
                    style = {{
                  alignContent: 'center',
                  justifyContent: 'center',
                  margin: 5,
                  }}
        
                    >
                    <FontAwesome5
                      name = {'clock'}
                      size ={15}
                    />
                </View>
                <TextInput
                keyboardType='numeric'
                mode ='Outlined'
                theme={{    
                    colors: {
                      primary: '#225'
                    }
                  }}
                label="Preparation Time (mins)"
                />
                
            </View>
                <View style = {styles.TextInput}>
                  <View
                    style = {{
                  alignContent: 'center',
                  justifyContent: 'center',
                  margin: 5,
                  }}
        
                    >
                    <FontAwesome5
                      name = {'motorcycle'}
                      size ={15}
                    />
                </View>
                <TextInput
                
                
                label="Delivery fee"
                theme={{    
                    colors: {
                      primary: '#225'
                    }
                  }}

                />
                </View>
            </View>
                  <Modal_apsg/>
                   
                        
            </ScrollView>
             <View style = {{alignItems: 'center', marginBottom: 55}}>
                        <Text style = {{fontSize: 10, color: '#000f'}}> 
                        By Listing your Product, you understand and agree on our   <Text style = {{ fontSize: 10, color: '#039016'}}
                        onPress={() => Linking.openURL(url)}>
                        
                        Terms and Conditions 
                        </Text>
                        </Text>
                        </View>
                        
            <Pressable
            style = {{
                justifyContent: 'center',
                alignSelf: 'center',
                height: 50,
                width: 500,
                backgroundColor: '#225',
                borderRadius: 20,
                position: 'absolute',
                bottom: 0,
            }}
            >
                <Text
                
                style = {{color: 'white', fontWeight: '900', textAlign: 'center'}}
                > ADD </Text>
            </Pressable>
        </View>
        
    );
};

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
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#e2e2e2',
    },
});

export default Add_Product;