
import React, { Component, useState , useEffect } from 'react';
import { 

  View, 
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image

} from 'react-native';
import { remoteDBOrder } from '../database/pouchDb';
import { useSelector } from 'react-redux';


export const Seller_parcel = () => {

  useEffect(() => {
    DriverDataofSeller()
    // StartsSync()
  }, []);

  const [newdata , setNewdata] = useState('')
  const orderItems = useSelector(state => state.items.orderItems);

  const DoneDriver = async(item) => {
    remoteDBOrder.get(item.doc._id).then(function(doc) {
      return remoteDBOrder.put({
        ...doc,
        Status: "OK"
      });
    }).then(function(response) {
      console.log(response)
      console.log('response')
    }).catch(function (err) {
      console.log(err);
    });
  }

  const DriverDataofSeller = () => {
    let filteredData = orderItems.filter(item => {
      return item.doc.Status === 'Done';
    });
    setNewdata(filteredData)
    console.log(filteredData)
    console.log('filteredData')
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
        <Text style={styles.title}>
        {item.doc._id}
       </Text>
    </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => DoneDriver(item)} >
    <View style={{margin: 20}} >
        <Text style={styles.title}>
        {item.doc.Status}
       </Text>
    </View>
    </TouchableOpacity>
  
   </View>
      );


    return (
      <SafeAreaView style = {styles.Safeview}> 

        <View style={styles.container}>
              <FlatList
                  data={newdata}
                  renderItem={renderItem}
                  keyExtractor={item => item.id}
              />
        </View>
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    
},
      title: {
        fontSize: 32,
      },
});


