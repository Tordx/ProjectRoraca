import React,{useState} from 'react';
import { 
    
    View,
    Text, 
    StyleSheet,
    Pressable,
    ScrollView,
    TouchableOpacity,
    Image
    
} from 'react-native';
import {TextInput} from 'react-native-paper'; 
import { Modal_apsg } from '../Components/Modalapsg';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {remoteDBItem} from '../database/pouchDb';
import { useSelector } from 'react-redux';

export default function UpdateItem() {

    const SelectedItem = useSelector(state => state.items.SelectedItem);
    const Images = useSelector(state => state.items.Images);

    const [productname, setProductname] = useState(SelectedItem._id);
    const [description, setDescription] = useState(SelectedItem.Description);
    const [category, setCategory] = useState(SelectedItem.Category);
    const [price, setPrice] = useState(SelectedItem.Price);
    const [preptime, setPreptime] = useState(SelectedItem.Preptime);
    const [deliveryfee, setDeliveryfee] = useState(SelectedItem.Deliveryfee);
    
    const updateItem = async() => {
     await remoteDBItem.get(SelectedItem._id).then(function(doc) {
            return remoteDBItem.put({
              _id: productname,
              _rev: doc._rev,
              Description : description,
              Category : category,
              Price : price,
              Preptime : preptime,
              Deliveryfee : deliveryfee,
            
            });
          }).then(function(response) {
            console.log(response)
            console.log('response')
          }).catch(function (err) {
            console.log(err);
          });
    }  



  return (
    <View style={styles.container}>
    <ScrollView>
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
    <Text
    style = {{fontSize: 20, fontWeight: 'bold', marginTop: 20,}}> 
    Update Product </Text>
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
    </View>
         
    {/* <Modal_apsg/>  */}
                
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
    onPress={updateItem}
    >
        <Text
        
        style = {{color: 'white', fontWeight: '900', textAlign: 'center'}}
        > ADD </Text>
    </Pressable>
    
    
</View>
  )
}

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
})