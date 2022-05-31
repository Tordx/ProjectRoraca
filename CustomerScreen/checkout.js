import React, { useState } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    ScrollView, 
    Pressable,
    Image,
    FlatList,
} from 'react-native';
import { Switch } from 'react-native-paper';
import CheckBox from '@react-native-community/checkbox';
import { useSelector } from 'react-redux';
import { remoteDBOrder } from '../database/pouchDb';
import { useNavigation } from '@react-navigation/native';

export default function _checkout() {

  const items = useSelector(state => state.items.items);
  const [isSelected, setSelection] = useState(false);
   const [isSwitchOn, setIsSwitchOn] = React.useState(false);
   const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
   const navigation = useNavigation(); 

 const newData = [items]
 console.log(newData)
 console.log('zzzz')
 const newID = items._id;
 const newrev = items._rev;
 const newDescription = items.Description;
 const newCategory = items.Category;
 const newPrice = items.Price;
 const newPreptime = items.Preptime;
 const newDeliveryfee = items.Deliveryfee;
 const newStatus = items.Status;
 const newImage = items.Image;





const renderItem = ({ item }) => {
  
  return(
    <View style={styles.item}>
        <Image 
                style={{width:390 , height:249}}
                resizeMode="cover"
                source={{uri: item.Image}}
                />
      <Text style={styles.title}>
          {item._id}
      </Text>
     </View>
  
  )
}

const Orders = () => {
    const newOrders = remoteDBOrder.put({
        _id: newID,
        rev: newrev,
        Description: newDescription,
        Category: newCategory,
        Price:newPrice,
        Preptime:newPreptime,
        Deliveryfee:newDeliveryfee,
        Status:newStatus,
        Image:newImage,
      }).then(function (response) {
        console.log(response)
        console.log('response')
        navigation.navigate('Home')
      }).catch(function (err) {
        console.log(err);
      });
}

    return (

        <View style={styles.container}>
            <FlatList
        
        data={newData}
        renderItem={renderItem}
        keyExtractor={item => item}

        />
            <View style = {styles.SwitchButton}>
                <View style = {{
                    marginRight: 170, 
                    flexDirection: 'row',
                    alignContent: 'center',
                    justifyContent: 'center',
                    }} >
                   
                        <Text> Available Coins:
                    <Text style = {{color: '#222255', fontSize: 17, fontWeight: '900', textAlign: 'center' }}> 150
                    </Text>
                    </Text> 
                </View>
                <Image
                        style = {{width: 25, height: 25, marginRight: 10,   }}
                        source = {{uri: 'https://i.imgur.com/o67cBSn.png'}}
                        />
                <Switch 
                    style = {{marginRight: 20,}}
                    color='#222255'
                    value={isSwitchOn} 
                    onValueChange={onToggleSwitch} />
            </View>
            <View style = {styles.bottomcheckout}>
              <View style={styles.container}>
                <View style={styles.checkboxContainer}>
                  <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                    tintColors = {{ true: '#225' , false: '#808080' }}
                  />
                
                </View>
                <Text style={styles.label}>{isSelected ? "added" : 'All'} </Text>
               
              </View>
                <Text style = {{

                    fontSize: 25,
                    fontWeight: 'bold',

                }}>
                    0.00
                </Text>
                <Pressable
                onPress={Orders}
                style = {styles.bottomcheckoutbox}>
                    <Text 
                    style = {styles.checkouttext}>
                        Check Out 
                        <Text style = {{fontSize: 15,}}></Text> 
                
                    </Text>
                </Pressable>
                
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

      checkboxContainer: {
        marginRight: 125,
        top: 10,
      },
      label: {
          bottom: 15,
          right: 20,

      },
    SwitchButton: {

        flexDirection: 'row',
        width: 420,
        height: 60,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#e2e2e2',
        shadowColor: "#000",
        shadowOffset: {
	            width: 0,
	            height: 4,
        },
        shadowOpacity: 0.32,
shadowRadius: 5.46,

elevation: 9,

    },

    checkouttext: {

        textAlign: 'center',
        justifyContent: 'center',
        color: '#e2e2e2',
        fontWeight: '900',
        fontSize: 15,

    },

    bottomcheckoutbox: {

        borderRadius: 10,
        width: 130,
        height: 50,
        justifyContent: 'center',
        backgroundColor: '#222255',
        margin: 20,

    },

    bottomcheckout: {

        flexDirection: 'row',
        width: 420,
        height: 75,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#e2e2e2',
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: 0.22,
shadowRadius: 2.22,

elevation: 3,

    },

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e2e2e2',
       
    },
    item: {
      backgroundColor: '#fff',
          width: '100%',
          height: 200,
          borderRadius: 10,
          margin: 5,
  
    },
    title: {
      width: 100,
      height: 100,
      fontSize: 20,
      position: 'absolute',
      textAlign: 'center',
      alignSelf: 'center',
      color: '#222'
    },
});

