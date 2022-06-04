
import React from 'react';
import {

    View,
    Text,
    StyleSheet,
    TouchableOpacity,


} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

function Drawer_Contents(props) {

    const navigation = useNavigation();
  
    return (
        <View style = {{flex: 1}}>
      <DrawerContentScrollView 
      {...props}
      >
        <DrawerItemList 
        {...props} 
        />
        
      </DrawerContentScrollView>
        <View style = {{padding: 10, borderTopWidth: 1, borderBottomWidth: 1, borderTopColor: '#225', marginBottom: 10, }}>
            <View style = {{marginLeft: 5, marginBottom: 0,  fontSize: 15, }}>
                <TouchableOpacity 
                onPress={() => navigation.navigate('Home')}
                 style = {{flexDirection: 'row', alignItems: 'center',}}
                 >
                <FontAwesome5
                
                name  = 'sign-out-alt'
                size = {20}
                color = {'#225'}
                />
                <Text style = {{marginLeft: 5, fontSize: 15, color: '#225' }}> Sign out </Text>
                </TouchableOpacity>
            </View>
            
            </View>
                <View style = {{justifyContent: 'center', alignItems: 'center', margin: 5,}}>
                    <Text> roraca 1.0.2022 </Text>
                </View>
            </View>
    );
  }
        
        {/* <DrawerItem label="Logout" onPress={() => navigation.navigate('Home')}
         /> */}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Drawer_Contents;
