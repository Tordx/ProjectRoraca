import React from 'react';
import Help_center from '../AppInfo/Help';
import { useNavigation } from '@react-navigation/native';
import { 

    createDrawerNavigator,
    DrawerItem,
    DrawerContentScrollView,
    DrawerItemList
  
  } from '@react-navigation/drawer';
import Driver_Tab from './DriverTab';
import Rates_ from '../AppInfo/Rates';
import Tracking_ from '../AppInfo/Tracking';
import Drawer_Contents from './DrawerContents';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Drawer = createDrawerNavigator();


function Driver_drawer () {

    return (

        <Drawer.Navigator
        
        initialRouteName='DriverTab'
        drawerContent={props => <Drawer_Contents {...props} />}
        screenOptions={{drawerLabelStyle: {marginLeft: -20}}}
        >
        
            
            <Drawer.Screen
            
                name = 'DriverTab'
                component = {Driver_Tab}
                options={{
                
                title: 'Account',
                drawerActiveBackgroundColor: '#225',
                drawerActiveTintColor: '#e2e2e2',
                drawerIcon: ({color}) => (
                  <FontAwesome5
                  
                    name='motorcycle'
                    size={20}
                    color = {color}

                  />
                ),
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
                    headerShown: false,  
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
    )
}    


export default Driver_drawer;
