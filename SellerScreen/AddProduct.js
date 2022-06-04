import React,{useState} from 'react';
import { 
    
    View,
    Text, 
    StyleSheet,
    Pressable,
    ScrollView,
    TouchableOpacity,
    Alert,
    
    
} from 'react-native';
import {TextInput} from 'react-native-paper'; 
import { Modal_apsg } from '../Components/Modalapsg';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {remoteDBItem} from '../database/pouchDb';
import { useSelector } from 'react-redux';
import { Picker } from '@react-native-picker/picker';




 const Add_Product = ({navigation}) => {

  const Images = useSelector(state => state.items.Images);

    const [productname, setProductname] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [subcategory, setSubcategory] = useState('');
    const [price, setPrice] = useState('');
    const [preptime, setPreptime] = useState('');
    const [deliveryfee, setDeliveryfee] = useState('');
    const [place, setPlace] = useState('');

  const setNewItem = async () => {

        if((productname.length == 0) && (description.length == 0) ) {
          console.log('ilove')
        }else{
         try {
           var NewProductData = {
             _id : productname,
             Description : description,
             category: category,
             subcategory : subcategory,
             place: place,
             Price : price,
             Preptime : preptime,
             Deliveryfee : deliveryfee,
             Image: Images
           }
           console.log(Images)
           console.log('Images')
           remoteDBItem.put(NewProductData)
           .then((response) =>{
             Alert.alert('Your Product has been successfully added!')
             console.log(response)
           })
           .catch(err=>console.log(err))
           
           navigation.navigate('SellerProductView');
           
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
                <View
                
                    style = {{
                        
                        backgroundColor: '#e2e2e2',
                        height: 50,
                        margin: 20,
                        justifyContent: 'center'
                    }}> 
                <Picker
                        title = 'Select Category'
                        selectedValue={category}
                        mode="dropdown"
                        style={{
                            transform: [
                               { scaleX: 1 }, 
                               { scaleY: 1 },
                            ],
                        width: 400,
                        bottom: 0,
                        color: '#9e9e9e',
                    
                          }}
                        onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}
                    >
                        <Picker.Item label="Food" value="Food" />
                        <Picker.Item label="Travel" value="Travel" />
                        <Picker.Item label="Hotel" value="Hotel" />
                        <Picker.Item label="Restaurant" value="Restaurant" />
                        <Picker.Item label="Grocery" value="Grocery" />
                        <Picker.Item label="Wellness" value="Wellness" />
                    </Picker>
                    
                    </View>
                    <View
                
                    style = {{
                        
                        backgroundColor: '#e2e2e2',
                        height: 50,
                        margin: 5,
                        justifyContent: 'center'
                    }}> 
                    <Picker
                        title = 'Select Category'
                        selectedValue={place}
                        mode="dropdown"
                        style={{
                            transform: [
                               { scaleX: 1 }, 
                               { scaleY: 1 },
                            ],
                        width: 400,
                        bottom: 0,
                        color: '#9e9e9e',
                    
                          }}
                        onValueChange={(itemValue, itemIndex) => setPlace(itemValue)}
                    >
                        <Picker.Item label="None" value="None" />
                        <Picker.Item label="Local" value="Local" />
                        <Picker.Item label="International" value="International" />
                    </Picker>
                </View>
                <View
                          
                    style = {{
                        
                        backgroundColor: '#e2e2e2',
                        height: 50,
                        margin: 20,
                        justifyContent: 'center'
                    }}> 
                <Picker
                        title = 'Select Category'
                        selectedValue={subcategory}
                        mode="dropdown"
                        style={{
                            transform: [
                               { scaleX: 1 }, 
                               { scaleY: 1 },
                            ],
                        width: 400,
                        bottom: 0,
                        color: '#9e9e9e',
                    
                          }}
                        onValueChange={(itemValue, itemIndex) => setSubcategory(itemValue)}
                    >
                        <Picker.Item label="None" value="None" />
                        <Picker.Item label="Drinks" value="Drinks" />
                        <Picker.Item label="Fast Food" value="FastFood" />
                        <Picker.Item label="Fruits" value="Fruits" />
                        <Picker.Item label="Liquors" value="Liquors" />
                        <Picker.Item label="Meal" value="Meal" />
                        <Picker.Item label="Pastry" value="Pastry" />
                        <Picker.Item label="Vegan" value="Vegan" />

                    </Picker>
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
 

export default Add_Product;