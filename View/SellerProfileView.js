
import React, {useState} from 'react';
import {

  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground, 
  Pressable,
  TextInput,
  ScrollView,
  FlatList,
  Alert,
  TouchableHighlight,
  TouchableOpacity,

} from 'react-native';
import Store_orders from '../Components/StoreOrders';
import History from '../Components/StoreHistory';
import _createClass from '@babel/runtime/helpers/createClass';
import Divider from 'react-native-divider';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ImagePicker from 'react-native-image-crop-picker';
import { useNavigation } from '@react-navigation/native';



export function Seller_Profile(){

  const navigation = useNavigation();

const [image, setImage] = useState('https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg');

const options = {
  title: 'Select Avatar',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

  const OpenGallery = () => {

      ImagePicker.openPicker({
          
          width: 400,
          height: 300,
          borderRadius: 15,
      }).then(image => {
          console.log(image);
          setImage(image.path);
      })
   
  
  }

  const [history, showhistory] = useState(false);

  return (

    <View style = {styles.body}>
       
      <TouchableOpacity 
      style = {{top: 20, justifyContent: 'flex-end'}}
      onPress={() => navigation.navigate('Home')}>
        <Text> Log out </Text>
        </TouchableOpacity>

      <View style = {styles.Profile} >
        <View
          style = {{ 
            width: 100,
            height: 100,
            borderRadius: 15
        }}>
          <ImageBackground
            source={{uri: image}}
            style = {{ width: 100,
              height: 100,
              bottom: -20,
              right: 5,
              alignItems: 'center',
              justifyContent: 'center'}}
            imagestyle = {{borderRadius: 100,}}>
          <TouchableOpacity
          onPress={OpenGallery}
        >
          <View style = {{justifyContent: 'center', alignSelf: 'center'}}>
          <FontAwesome5 
        
           
            name = {'image'}
            size ={50}
            />
            </View>
          </TouchableOpacity>    

          </ImageBackground>
          </View>
        <View style = {{left: 40, flexDirection: 'column', bottom: -20}}>
        <Text style = {{fontSize: 30, fontWeight: 'bold'}}>Le Coucou</Text>
        <Text>+ 18565054 121</Text>
        </View>
                
      </View>
      <Divider/>
      <View style = {{flexDirection: 'row', top: 2, }}>
        <View  style = {{
         
          width: 325, 
          height: 35,
          borderRadius: 10, 
          margin: 10,
          backgroundColor: '#ffff',
          flexDirection: 'row',
        }}>
        <View
          style = {{
          alignContent: 'center',
          justifyContent: 'center',
          margin: 5,
        }}>
          <FontAwesome5
       
            name = {'search'}
            size ={15}
          />
        </View>
       
          <TextInput
       
            style = {{top: 3,}}
            placeholder = 'search transaction'
          />
        </View>
      </View>
        <Pressable >
          <Text style = {{ color: '#ffa45e', fontStyle: 'italic', margin: 20,}}> Transaction History </Text>
        </Pressable>
    
    <View style = {{width: 450, height: 460}}>
      {
        history? <Store_orders/>: <History/>
      }
      </View>
      
      <View style ={{flexDirection: 'row',position: 'absolute', bottom: 20,}} >
            <TouchableHighlight style = {styles.TH}
            onPress={()=> showhistory(true)}
            >
            <Text style = {styles.THT} >  Orders </Text>
            </TouchableHighlight >
            
            <TouchableHighlight style = {styles.TH}
              onPress={()=> showhistory(false)}>
            <Text style = {styles.THT}> History </Text> 
            </TouchableHighlight>
            </View>

      </View>
  ) 

}

  const styles = StyleSheet.create({

    THT: {

      color: '#225',
      alignItems: 'center',
      textAlign: 'center',
      fontWeight: '900',
      fontSize: 18,

    },

    TH: {
      
      borderWidth: 1,
      borderColor: '#225',
      width: 150,
      height: 35,
      backgroundColor: '#e2e2e2',
      borderRadius: 30,
      margin: 20,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.46,
      shadowRadius: 10,
      
      elevation: 53,
    
    
    },
    Profile: {

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20, 
        right: 40,
        
        

    },

    buttontext: {

      color: '#e2e2e2',
      alignItems: 'center',
      textAlign: 'center',
      fontWeight: '900',
      fontSize: 18,

    },

    body: {

      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#e2e2e2', 
    }



  })