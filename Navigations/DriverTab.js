
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Item_view } from '../View/DriverItemView'
import { Driver_chat } from '../View/DriverChatView';
import { Driver_profile } from '../View/DriverProfileView';
import Help_center from '../AppInfo/Help';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { 

    createDrawerNavigator,
    DrawerItem,
    DrawerContentScrollView,
    DrawerItemList
  
  } from '@react-navigation/drawer';
  import { useNavigation } from '@react-navigation/native';
import Driver_notification from '../View/DriverNotification';

const Driver = createBottomTabNavigator();

const Driver_Tab = () => {

    return (
        <Driver.Navigator initialRouteName='DriverItemView'

        screenOptions={({route}) => ({
            tabBarIcon:({focused, size, color}) => {
              let iconName;
                if(route.name==='DriverItemView'){
                  iconName = 'box-open';
                  size = focused ? 23 : 20;
                  color = focused ? '#ffa45e': '#555'; 
  
                } else if (route.name === 'DriverChatView') {
                  iconName = 'envelope-open-text';
                  size = focused ? 23 : 20;
                  color = focused ? '#ffa45e': '#555';
  
                } else if (route.name === 'DriverProfileView') {
                    iconName = 'user-alt';
                    size = focused ? 23 : 20;
                    color = focused ? '#ffa45e': '#555';
                } else if (route.name === 'DriverNotification') {
                    iconName = 'concierge-bell';
                    size = focused ? 23 : 20;
                    color = focused ? '#ffa45e': '#555';
                }

                    return(
                    <FontAwesome5
                        name = {iconName}
                        size={size}
                        color = {color}
                    />
                    )
            }
        })}
            tabBarOptions = {{

                activeBackgroundColor: '#e2e2e2',
                inactiveBackgroundColor: '#ffff',
                showLabel: false,
              
      
              }}

        >

            <Driver.Screen
            
                name= 'DriverItemView'
                component = {Item_view}
                options = {{
                    title: 'Item',
                    headerTintColor: '#808080',
                }}


            />

            <Driver.Screen
            
                name= 'DriverChatView'
                component = {Driver_chat}
                options = {{
                    title: 'Chat',
                    headerTintColor: '#808080',
                }}

            />

            <Driver.Screen
  
                name = 'DriverNotification'
                component={Driver_notification}
                options={{
                headerTintColor: '#808080',
                headerStyle: {
                 backgroundColor: '#e2e2e2' }
            }} 


            />

            <Driver.Screen
            
                name= 'DriverProfileView'
                component = {Driver_profile}
                options = {{
                    title: 'Profile',
                    headerTintColor: '#808080',
                }}

            />

            


        

        </Driver.Navigator>
        
    );
};




export default Driver_Tab;
