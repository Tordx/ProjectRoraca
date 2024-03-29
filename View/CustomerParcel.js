import React,{useState} from 'react';
import { 
    
    View,
    Text, 
    StyleSheet,
    Pressable,
    ScrollView,
    TouchableOpacity,
    
    
} from 'react-native';
import {TextInput} from 'react-native-paper'; 
import { Modal_apsg } from '../Components/Modalapsg';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {remoteDBOrder} from '../database/pouchDb';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

export default function CustomerParcel(){

    const Images = useSelector(state => state.items.Images);

    const navigation = useNavigation();

    const [productname, setProductname] = useState('');
     const [description, setDescription] = useState('');
     const [category, setCategory] = useState('');
     const [price, setPrice] = useState('');
     const [preptime, setPreptime] = useState('');
     const [deliveryfee, setDeliveryfee] = useState('');
     const [individual , setIndividual] = useState('')

    const setNewItem = async () => {

        if((productname.length == 0) && (description.length == 0) ) {
          console.log('ilove')
        }else{
         try {
           var NewProductData = {
             _id : productname,
             Description : description,
             Category : category,
             Price : price,
             Preptime : preptime,
             Deliveryfee : deliveryfee,
             Individual: individual,
             Image: Images
           }
           console.log(Images)
           console.log('Images')
           remoteDBOrder.put(NewProductData)
           .then((response) =>{
             console.log(response)
           })
           .catch(err=>console.log(err))
           navigation.navigate('CustomerNav');
         } catch (error) {
          console.log(error)
         }
         }
        }

    return (
        <View style={styles.container}>
            <ScrollView>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text
            style = {{fontSize: 20, fontWeight: 'bold', marginTop: 20,}}> 
            Add Product </Text>
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
                    onChangeText={(value) => setProductname(value)}
                   value={productname}
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
                onChangeText={(value) => setDescription(value)}
                value={description}
                mode ='Outlined'
                multiline
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
                      name = {'coins'}
                      size ={15}
                    />
                </View>
                <TextInput
                  onChangeText={(value) => setCategory(value)}
                  value={category}
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
                onChangeText={(value) => setPrice(value)}
                value={price}
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
                onChangeText={(value) => setPreptime(value)}
                value={preptime}
                keyboardType='numeric'
                mode ='Outlined'
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
                      name = {'motorcycle'}
                      size ={15}
                    />
                </View>
                <TextInput
                onChangeText={(value) => setDeliveryfee(value)}
                value={deliveryfee}
                label="Delivery fee"
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
                      name = {'motorcycle'}
                      size ={15}
                    />
                </View>
                <TextInput
                onChangeText={(value) => setIndividual(value)}
                value={individual}
                label="Individual"
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
            onPress={setNewItem}
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