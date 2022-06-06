
import React from 'react';
import { 
    
    createDrawerNavigator, 
    DrawerContentScrollView, 
    DrawerItem, 
    DrawerItemList 
} from '@react-navigation/drawer';
import Customer_Tab from './CustomerTab'
import Help_center from '../AppInfo/Help';
import Rates_ from '../AppInfo/Rates'
import Tracking_ from '../AppInfo/Tracking';
import { useNavigation } from '@react-navigation/native';
import Drawer_Contents from './DrawerContents';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import _checkout from '../CustomerScreen/checkout';

const Drawer = createDrawerNavigator();



const Customer_drawer = () => {
    return (

        <Drawer.Navigator 
        
        initialRouteName='CustomerNav'
        drawerContent={props => <Drawer_Contents {...props}/>}
        screenOptions={{drawerLabelStyle: {marginLeft: -20}}}
        >

            <Drawer.Screen

            name = 'CustomerTab'
            component={Customer_Tab}
            options = {{

               title: 'Account',
                drawerActiveBackgroundColor: '#225',
                drawerActiveTintColor: '#e2e2e2',
                drawerIcon: ({color}) => (
                    <FontAwesome5
                    
                      name='home'
                      size={20}
                      color = {color}

                    />
                  ),
                headerShown: false,

            }}
            />

            <Drawer.Screen
            
                name = 'Checkout'
                component={_checkout}
                  options={{ 
                    drawerActiveBackgroundColor: '#225',
                    drawerActiveTintColor: '#e2e2e2',
                    title: 'Checkout',
                    drawerIcon: ({color}) => (
                      <FontAwesome5
                      
                        name='shopping-cart'
                        size={20}
                        color = {color}

                      />
                    ),
                }}
                />

            <Drawer.Screen
            
            name = 'Help'
            component={Help_center}
                  options={{  
                    headerShown: false,  
                    drawerActiveBackgroundColor: '#225',
                    drawerActiveTintColor: '#e2e2e2',
                    title: 'Help Center',
                    drawerIcon: ({color}) => (
                        <FontAwesome5
                        
                          name='question-circle'
                          size={20}
                          color = {color}
  
                        />
                      ),
                  }}
            />

            <Drawer.Screen
        
            name = 'Rates_'
            component={Rates_}
                options={{  
                    title: 'Rates',
                    drawerActiveBackgroundColor: '#225',
                    drawerActiveTintColor: '#e2e2e2',
                    headerShown: true,
                    drawerIcon: ({color}) => (
                        <FontAwesome5
                        
                          name='percentage'
                          size={20}
                          color = {color}
  
                        />
                      ),
                }}


        />

            <Drawer.Screen
            
            name = 'Tracking'
            component={Tracking_}
                  options={{
                    drawerActiveBackgroundColor: '#225',
                    drawerActiveTintColor: '#e2e2e2',
                    title: 'Tracking',
                    drawerIcon: ({color}) => (
                        <FontAwesome5
                        
                          name='map-marked-alt'
                          size={20}
                          color = {color}
  
                        />
                      ),
                  }}
            />
        </Drawer.Navigator>

    );
};


export default Customer_drawer;
