
import React from 'react';
import { 
    SafeAreaView, 
    View, 
    FlatList,
    StyleSheet, 
    Text, 
    StatusBar, 
    ScrollView 
  
  } from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Customet Chat',
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
    id: '58694a0f-3da1-471f-bd96-145571e29d75',
    title: 'Fifth Item',
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

export const Chat_view = () => {
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
}

const styles = StyleSheet.create({

    Safeview: {
        flex: 1,  
        backgroundColor: '#e2e2e2'
      },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#e2e2e2'
  },
  item: {
    backgroundColor: '#e2e2e2',
    padding: 20,
    marginVertical: 1,
    marginHorizontal: 1,

  },
  title: {
    fontSize: 32,
  },
});