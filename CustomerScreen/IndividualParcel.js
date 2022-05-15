
import React from 'react';
import { View, Text, Pressable } from 'react-native';

const Individual_parcel = () => {
    return (
        <View style = {{backgroundColor: '#e2e2e2',
        height: 50, width: 300, borderRadius: 20, marginTop: 20, marginBottom: 10, justifyContent: 'center', alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
          width: 2,
          height:2,
        },
        shadowOpacity: 1,
        shadowRadius: 6.27,
        elevation: 9,}} >
  
        <Pressable>
  
          <Text style = {{fontWeight: 'bold'}} > Have <Text style = {{color: '#F0509D'}} >parcel</Text> that needs to be delivered? </Text> 
          </Pressable>
          </View>
    );
};

export default Individual_parcel;