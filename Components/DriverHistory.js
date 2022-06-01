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


export default function Driver_history  () {

  useEffect(() => {
    DriverHistoryData()
    // StartsSync()
  }, []);

  const [newdata , setNewdata] = useState('')
  const orderItems = useSelector(state => state.items.orderItems);

  const DriverHistoryData = () => {
    let filteredData = orderItems.filter(item => {
      return  item.doc.Status  === 'OK';
      
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
    <TouchableOpacity>
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
        fontSize: 32,
      },
});


