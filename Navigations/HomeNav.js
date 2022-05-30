import React from 'react';
import {

  View,
  Text,

} from 'react-native';
import Default_Screen from './Home';
import Help_center from '../AppInfo/Help';
import Login_view from './LoginView'
import Create_view from './CreateView'
import { 

  createDrawerNavigator,
  DrawerItem,
  DrawerContentScrollView,
  DrawerItemList

} from '@react-navigation/drawer';;
import { useNavigation } from '@react-navigation/native';


const Drawer = createDrawerNavigator();

export  function Home_drawer() {
  return (

    <Drawer.Navigator > 
        <Drawer.Screen
        
              name = 'Home'
              component={Default_Screen}
              options={{  
                title: 'Home',
                    drawerActiveBackgroundColor: '#225',
                    drawerActiveTintColor: '#e2e2e2',
                    drawerIcon: () => null,
                    headerShown: false,
              }}

        />
        
        <Drawer.Screen
        
        name = 'Login'
        component={Login_view}
        options={{
          title: 'Login',
                    drawerActiveBackgroundColor: '#225',
                    drawerActiveTintColor: '#e2e2e2',
                    drawerIcon: () => null,
                    headerShown: false,
        }}

        />

        <Drawer.Screen
        
        name = 'Create Account'
        component={Create_view}
        options={{
          title: 'Create Account',
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
                title: 'Help Center',
                    drawerActiveBackgroundColor: '#225',
                    drawerActiveTintColor: '#e2e2e2',
                    headerShown: true,
              }}

        />
        
    </Drawer.Navigator>
    
      
          
  );
}

