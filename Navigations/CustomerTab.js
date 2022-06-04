// Tab section for general tab view, exported to App.js

import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Product_view } from '../View/CustomerProductView';
import { Chat_view } from '../View/CustomerChatView';
import { Profile_view } from '../View/CustomerProfileView';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Customer_notification from '../View/CustomerNotification';

const Customer = createBottomTabNavigator();

function Customer_Tab () {

    return (
       
      <Customer.Navigator initialRouteName='FoodLane'
        
        screenOptions={({route}) => ({
          tabBarIcon:({focused, size, color}) => {
            let iconName;
              if(route.name==='FoodLane'){
                iconName = 'store-alt';
                size = focused ? 23 : 20;
                color = focused ? '#ffa45e': '#555'; 

              } else if (route.name === 'Chat') {
                iconName = 'envelope-open-text';
                size = focused ? 23 : 20;
                color = focused ? '#ffa45e': '#555';

              } else if (route.name === 'CustomerNotification') {
                iconName = 'concierge-bell';
                size = focused ? 23 : 20;
                color = focused ? '#ffa45e': '#555';

              } else if (route.name === 'Profile') {
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

        <Customer.Screen
  
          name = 'FoodLane'
          component={Product_view}
          options={{
            
            headerShown: false,
         
          }} 
        />
        <Customer.Screen
  
          name = 'Chat'
          component={Chat_view}
          options={{
            headerTintColor: '#808080',
            headerStyle: {
              backgroundColor: '#e2e2e2' }
          }} 


        />

          <Customer.Screen
  
          name = 'CustomerNotification'
          component={Customer_notification}
          options={{
            headerTintColor: '#808080',
            headerStyle: {
              backgroundColor: '#e2e2e2' }
          }} 


        />

        <Customer.Screen
  
          name = 'Profile'
          component={Profile_view}
          options={{  
            headerTintColor: '#808080',
            headerStyle: {
              backgroundColor: '#e2e2e2' }
          }} 

        />

        


      </Customer.Navigator>

    )

}

export default Customer_Tab;