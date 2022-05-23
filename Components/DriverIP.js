
import React, { Component } from 'react';
import { 

  View, 
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  StatusBar

} from 'react-native';

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'C1231235555er',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: '12312364366464123 Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: '51612kjdfgsjr3 Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d74',
      title: '23423dfg;ojkdsfg6237 Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d75',
      title: 'dsfgdsgdsg 234234167   ',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d76',
      title: 'Sixth Item',
    },
    
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d77',
      title: 'seventh Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d78',
      title: 'Sixth Item',
    },
    
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d79',
      title: 'seventh Item',
    },
  ];
  
  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  


export const Individual_parcel_list = () => {

  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );


    return (
      <SafeAreaView style = {styles.Safeview}> 

        <View style={styles.container}>
              <FlatList
                  data={DATA}
                  renderItem={renderItem}
                  keyExtractor={item => item.id}
              />
        </View>
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  Safeview: {
        flex: 1,  
        backgroundColor: '#e2e2e2'
      },
      container: {
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#2c3e50',
    },
    item: {
        backgroundColor: '#fff',
            width: 375,
            height: 100,
            borderRadius: 10,
            margin: 5,
    
      },
      title: {
        fontSize: 15,
        position: 'absolute',
        bottom: 20,
        textAlign: 'center',
        alignSelf: 'center',
        color: '#222'
      },

});

