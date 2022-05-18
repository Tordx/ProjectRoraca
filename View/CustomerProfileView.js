
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

} from 'react-native';
import { sub } from 'react-native-reanimated';

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Customer Profile',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'KYLE Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d74',
      title: 'Fourth Item',
    },

];


const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);


export function Profile_view(){

const [submitted, setsubmitted] = useState();

const _walletbalance = () => {
    Alert.alert('No payment linked', 'link your choice of payment first');
  
};

  const renderItem = ({ item }) => (
    <Item title={item.title} />
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
      <ScrollView style = {{backgroundColor: '#fff122', width: 475,}} >
        <FlatList
        
        
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}

        />
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
      fontSize: 18,

    },

    fundbutton2: {

      width: 175,
      height: 45,
      backgroundColor: '#222255',
      borderRadius: 10,
      margin: 5,
      alignItems: 'center',
      justifyContent: 'center',

    },

    fundbutton1: {

      width: 175,
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

    }



  })