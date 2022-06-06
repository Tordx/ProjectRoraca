
import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Individual_parcel () {

  const navigation = useNavigation();

    return (
      
        <View style = {{backgroundColor: '#e2e2e2',
          height: 50, width: 250, borderRadius: 20, marginTop: 20, marginBottom: 10, justifyContent: 'center', alignSelf: 'center',
          shadowColor: "#000",
          shadowOffset: {
          width: 2,
          height:2,
          },
          shadowOpacity: 1,
          shadowRadius: 6.27,
          elevation: 9,
          position: 'absolute',
          top: 175,

          }} >
          
        <Pressable onPress={() => navigation.navigate('IPform')} >
  
          <Text style = {{fontWeight: 'bold', textAlign: 'center'}} > Sending <Text style = {{color: '#F0509D'}} >Parcel</Text> ? <Text style = {{color: '#225'}} > We gotchu bruh</Text></Text> 
          </Pressable>
          </View>
    );
};

