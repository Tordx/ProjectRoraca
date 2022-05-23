
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Item_view } from '../View/DriverItemView'
import { Driver_chat } from '../View/DriverChatView';
import { Driver_profile } from '../View/DriverProfileView';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { color } from 'react-native-reanimated';

const Driver = createBottomTabNavigator();

const Driver_Tab = () => {

    return (
        <Driver.Navigator initialRouteName='DriverItemView'

        screenOptions={({route}) => ({
            tabBarIcon:({focused, size, color}) => {
              let iconName;
                if(route.name==='DriverItemView'){
                  iconName = 'box';
                  size = focused ? 23 : 20;
                  color = focused ? '#ffa45e': '#555'; 
  
                } else if (route.name === 'DriverChatView') {
                  iconName = 'inbox';
                  size = focused ? 23 : 20;
                  color = focused ? '#ffa45e': '#555';
  
                } else if (route.name === 'DriverProfileView') {
                    iconName = 'user-alt';
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
                headerShown: false,
                }}


            />
            <Driver.Screen
            
                name= 'DriverProfileView'
                component = {Driver_profile}
                 options = {{
                headerShown: false,
                }}


          />

        

        </Driver.Navigator>
    );
};

export default Driver_Tab;
