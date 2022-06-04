///////////// when pressed it navigates to a screen where the customer view the stores products
//////////// if the customer wants to order 2 separate store they must pay different fees
import React from 'react';
import {
  View, 
  Text, 
  StyleSheet, 
  Pressable, 
  Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Store_Ad = () => {

  const navigation = useNavigation();

  return (
    <View style = {styles.container}>

       
        
      <Pressable style={styles.Product}
       onPress={() => {
        navigation.navigate('StoreProfile_CSVIEW');
      }}
      >
        <Image
          style={{justifyContent: 'center',  flex: 1, borderRadius: 10}}
          resizeMode="cover"
          source={{
            uri: 'https://i.ndtvimg.com/i/2017-10/gourmet-620_620x350_71507112783.jpg',
          }}
        />
      </Pressable>
      <Text style={{fontWeight: '900',}}> Le Coucou </Text>
      <Text> P80 Delivery Fee </Text>

    </View>
  );
};

const styles = StyleSheet.create({

    container: {

      alignSelf: 'center',

    },

    Product: {

      width: 375,
      height: 175,
      borderRadius: 20,
      backgroundColor: '',
      marginTop: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 2,
        height: 2,
      },
      shadowOpacity: 1,
      shadowRadius: 6.27,

      elevation: 9,
  },
});

export default Store_Ad;
