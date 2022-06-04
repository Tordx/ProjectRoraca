import React, { Component, useState, useEffect } from 'react';
import { 
    View, 
    Text, 
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Image

} from 'react-native';
import { remoteDBOrder } from '../database/pouchDb';
import { useSelector } from 'react-redux';

export default function Store_orders  (){

  useEffect(() => {
    SellerData()
    // StartsSync()
  }, []);

  const [newdata , setNewdata] = useState('')
  const orderItems = useSelector(state => state.items.orderItems);

  const DoneSeller = async(item) => {
    remoteDBOrder.get(item.doc._id).then(function(doc) {
      return remoteDBOrder.put({
        ...doc,
        Status: "Done"
      });
    }).then(function(response) {
      console.log(response)
      console.log('response')
    }).catch(function (err) {
      console.log(err);
    });
  }
  const SellerData = () => {
    let filteredData = orderItems.filter(item => {
      return item.doc.Status === 'Pending';
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
    <TouchableOpacity onPress={() => DoneSeller(item)}>
    <View style={{margin: 20}} >
        <Text style={styles.title}>
        {item.doc.Status}
       </Text>
    </View>
    </TouchableOpacity>
  
   </View>
      );
      
    return (
        <View style={styles.container}>
            <FlatList
            data={newdata}
            renderItem={renderItem}
            keyExtractor={item => String(item.doc._id)}
    />
        </View>
    );
};

 
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    
},
      title: {
        fontSize: 25,
      },
});

