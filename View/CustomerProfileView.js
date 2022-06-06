
import React, {useState ,useEffect} from 'react';
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
  TouchableOpacity

} from 'react-native';
import { sub } from 'react-native-reanimated';
import CustomerParcel from './CustomerParcel';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';


export default function Profile_view(){

useEffect(() => {
  DriverHistoryData()
  // StartsSync()
}, []);

const [newdata , setNewdata] = useState('')
const orderItems = useSelector(state => state.items.orderItems);
const [submitted, setsubmitted] = useState();
const navigation = useNavigation(); 

const DriverHistoryData = () => {
  let filteredData = orderItems.filter(item => {
    return item.doc.Individual === 'OK';
  });
  setNewdata(filteredData)
  console.log(filteredData)
  console.log('filteredData')
}


const _walletbalance = () => {
    Alert.alert('No payment linked', 'link your choice of payment first');
  
};

const Parcel = () => {
  navigation.navigate('CustomerParcel')
}

const renderItem = ({ item }) => (
  <View style ={{flexDirection: 'row' }}>
    <Image 
       style={{width:80 , height:80}}
       resizeMode="contain"
        source={{uri: item.doc.Image}}
        />
  <TouchableOpacity>
   <View  style={{margin: 20}}>
      <Text style={styles.titles}>
      {item.doc._id}
     </Text>
  </View>
  </TouchableOpacity>
  <TouchableOpacity>
  <View style={{margin: 20}} >
      <Text style={styles.titles}>
      {item.doc.Individual}
     </Text>
  </View>
  </TouchableOpacity>

 </View>
    );

  return (

      <View style = {styles.body}>
         <View style = {styles.balancebox}>
          <Text style = {{
                right: 125,
                color: '#e2e2e2',
                fontWeight: '700',
                fontSize: 15,
                top: 20,

          }}> Available balance </Text>

          <View style = {{flexDirection: 'row', 
                          right: 58,
                          marginLeft: 20,}}>
            <Image
          style = {{width: 30, height: 30, left: 20 ,
            top: 35, }}
          source = {{uri: 'https://i.imgur.com/4Rl1cKI.png'}}/>

          <Text style = {{

            left: 5,
            top: 20,
            color: '#e2e2e2',
            fontSize: 40,
            fontWeight: '500',

          }}>  50,000.00  </Text>

            <Pressable>
            <Image
            
            style = {{width: 70, height: 100, top: 0, left: 50,  }}
            resizeMode= 'cover'
            source={{uri: 'https://i.imgur.com/Z38yLaj.png'}}

            />
          </Pressable>

          </View>

          

          <View style = {{ flexDirection: 'row', right: 115, bottom: 20,  }}> 
          <Image
          style = {{width: 15, height: 15, top: 3, }}
          source = {{uri: 'https://i.imgur.com/o67cBSn.png'}}

          />
          <Text
          style = {{ color: '#e2e2e2' }}
          >  Coins earned: <Text style = {{ color: '#ffa45e' }}> 150 </Text> </Text>
          </View>

          
        </View>

          <View style ={{flexDirection: 'row', bottom: -10,}} >
            <Pressable style = {styles.fundbutton1}
            onPress={_walletbalance}
            >
            <Text style = {styles.buttontext} > WITHDRAW </Text>
            </Pressable >
            
            <Pressable style = {styles.fundbutton2}>
            <Text style = {styles.buttontext}> ADD FUNDS </Text>
            </Pressable>
            <Pressable style = {styles.fundbutton2}
            onPress={Parcel}
            >
            <Text style = {styles.buttontext}> PARCEL </Text>
            </Pressable>
          </View>

          <View style = {styles.cellbox}>
            <View style ={{flexDirection: 'row',}} >
              <Pressable style = {styles._cell1} >
              </Pressable>
              <Pressable style = {styles._cell1} >
              </Pressable>
              <Pressable style = {styles._cell1} >
              </Pressable>
              <Pressable style = {styles._celllast} >
              </Pressable>
          
            </View>
              <View style ={{flexDirection: 'row',}} >
              <Pressable style = {styles._cell2} >
              </Pressable>
              <Pressable style = {styles._cell2} >
              </Pressable>
              <Pressable style = {styles._cell2} >
              </Pressable>
              <Pressable style = {styles._celllast} >
              </Pressable>
              </View>
          </View>
        <Pressable  >
          <Text style = {{ color: '#ffa45e', fontStyle: 'italic',}}> Transaction History </Text>
        </Pressable>
      <ScrollView style = {{backgroundColor: '#e2e2e2', width: 475,}} >
      <View style={styles.container}>
            <FlatList
            showsVerticalScrollIndicator = {false}
            data={newdata}
            renderItem={renderItem}
            keyExtractor={item => String(item.doc._id)}
    />
        </View>
      </ScrollView>
      </View>
  )

}

  const styles = StyleSheet.create({

    item: {
      backgroundColor: '#e2e2e2',
      padding: 20,
      marginVertical: 0,
      marginHorizontal: 20,
  
    },
    title: {
      fontSize: 32,
    },

    buttontext: {

      color: '#e2e2e2',
      alignItems: 'center',
      textAlign: 'center',
      fontWeight: '900',
      fontSize: 15,

    },

    fundbutton2: {

      width: 120,
      height: 45,
      backgroundColor: '#222255',
      borderRadius: 10,
      margin: 5,
      alignItems: 'center',
      justifyContent: 'center',

    },

    fundbutton1: {

      width: 120,
      height: 45,
      backgroundColor: '#ec4176',
      borderRadius: 10,
      margin: 5,
      marginBottom: 10,
      alignItems: 'center',
      justifyContent: 'center',

    },

    cellbox: { 
      flexdirection: 'column', 
      backgroundColor: '#e2e2e2',
      alignItems: 'center', 
      justifyContent: 'center',
      height: 225,
      width: 450,
      Right: -20,
    },

    _cell1: {

      backgroundColor: '#808080',
      width: 75,
      height: 75,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 20,
      marginBottom: 20,

    },
    
    _cell2: {

      backgroundColor: '#808080',
      width: 75,
      height: 75,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 20,

    },

    _celllast : {

      backgroundColor: '#808080',
      width: 75,
      height: 75,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 0,

    },


    balancebox: {


      marginTop: 20,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity:  0.19,
      shadowRadius: 5.62,
      elevation: 6,
      backgroundColor: '#222555',
      height: 125,
      width: 400,
      justifyContent: 'center',
      alignItems: 'center',

    },

    body: {

      flex: 1,
      alignItems: 'center',
      backgroundColor: '#e2e2e2'

    },
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      
  },
        titles: {
          fontSize: 32,
        },



  })