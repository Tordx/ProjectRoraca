
import React from 'react';
import { View, Text, Pressable, Touchable } from 'react-native';

export default function Individual_parcel () {
    return (
      
        <View style = {{backgroundColor: '#e2e2e2',
          height: 40, width: 300, borderRadius: 20, marginTop: -65, marginBottom: 10, justifyContent: 'center', alignSelf: 'center',
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
          
        <Pressable>
          <Text style = {{fontWeight: 'bold', textAlign: 'center'}} > Have <Text style = {{color: '#F0509D'}} >parcel</Text> that needs to be delivered? </Text> 
          </Pressable>
          </View>
    );
};

