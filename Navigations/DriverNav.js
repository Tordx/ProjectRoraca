import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Item_view } from '../View/DriverItemView'
import { Driver_chat } from '../View/DriverChatView';
import { Driver_profile } from '../View/DriverProfileView';
import Help_center from '../AppInfo/Help';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import { 

    createDrawerNavigator,
    DrawerItem,
    DrawerContentScrollView,
    DrawerItemList
  
  } from '@react-navigation/drawer';
  import Driver_Tab from './DriverTab';

const Drawer = createDrawerNavigator();

function Version(props) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <View style   ={{height: 500, AlignItems: 'center'}}>
            <Text style = {{textAlign: 'center'}}>
                 1.0.01
            </Text>
            <Text style = {{textAlign: 'center'}}>
                © 2021 roraca
            </Text>
            <Text style = {{textAlign: 'center'}}>
                all rights reserved
            </Text>
        </View>
      </DrawerContentScrollView>
    );
  }

function Logout1(props) {

    const navigation = useNavigation();
  
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem label="Logout" onPress={() => navigation.navigate('Home')}
         />
        
      </DrawerContentScrollView>
    );
  }

function Driver_drawer () {

    return (

        <Drawer.Navigator
        
        initialRouteName='DriverTab'
        drawerContent={props => <Logout1 {...props} />}
        >
        
            
            <Drawer.Screen
            
                name = 'DriverTab'
                component = {Driver_Tab}
                options={{
                
                title: 'Account',
                drawerActiveBackgroundColor: '#225',
                drawerActiveTintColor: '#e2e2e2',
                drawerIcon: () => null,
                headerShown: false,

                }}
            />
    
            <Drawer.Screen
            
                  name = 'Help'
                  component={Help_center}
                  options={{  
                    headerShown: false,  
                    drawerActiveBackgroundColor: '#225',
                    drawerActiveTintColor: '#e2e2e2',
                  }}
    
            />
            
        </Drawer.Navigator>
    )
}    


export default Driver_drawer;
