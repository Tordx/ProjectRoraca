import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet,
    FlatList,

} from 'react-native';

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d74',
      title: 'Fourth Item',
    },
    {
      id: 'bd7acbea-c1b12-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: 'bd7ac3bea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: 'bd7acbe123a-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },

];


const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Store_orders = () => {

    const renderItem = ({ item }) => (
        <Item title={item.title} />
      );
      
    return (
        <View style={styles.container}>
            <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
    />
        </View>
    );
};
 
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
});

export default Store_orders;
