// Tab section for general tab view, exported to App.js

import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Product_view } from '../View/ProductView';
import { Chat_view } from '../View/ChatView';
import { Profile_view } from '../View/ProfileView';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

function Tab_view () {

    return (
       
      <Tab.Navigator initialRouteName='Profile'
        
        screenOptions={({route}) => ({
          tabBarIcon:({focused,size, color}) => {
            let iconName;
              if(route.name==='Product'){
                iconName = 'store';
                size = focused ? 23 : 20;
                color = focused ? '#225': '#555'; 

              } else if (route.name === 'Chat') {
                iconName = 'inbox';
                size = focused ? 23 : 20;
                color = focused ? '#225': '#555';

              } else if (route.name === 'Profile') {
                iconName = 'user-alt';
                size = focused ? 23 : 20;
                color = focused ? '#225': '#555';

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

        <Tab.Screen
  
          name = 'Product'
          component={Product_view}
          options={{  
            headerShown: false,  
          }} 

        />
        <Tab.Screen
  
          name = 'Chat'
          component={Chat_view}
          options={{  
            headerShown: false,  
          }} 


        />
        <Tab.Screen
  
          name = 'Profile'
          component={Profile_view}
          options={{  
            headerShown: false,  
          }} 

        />


      </Tab.Navigator>

    )

}

export default Tab_view;