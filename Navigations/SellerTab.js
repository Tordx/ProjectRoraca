

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Add_ProductView} from '../View/SellerProductView';
import {Seller_Chat} from '../View/SellerChatView';
import {Seller_Profile}  from '../View/SellerProfileView';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Help_center from '../AppInfo/Help';
import { 

    createDrawerNavigator,
    DrawerItem,
    DrawerContentScrollView,
    DrawerItemList
  
  } from '@react-navigation/drawer';
  import { useNavigation } from '@react-navigation/native';
import Seller_notification from '../View/SellerNotification';
const Seller = createBottomTabNavigator();

const Seller_Tab = () => {



    return (

        <Seller.Navigator initialRouteName='SellerProductView'

        screenOptions={({route}) => ({
            tabBarIcon:({focused, size, color}) => {
              let iconName;
                if(route.name==='SellerProductView'){
                  iconName = 'store';
                  size = focused ? 23 : 20;
                  color = focused ? '#ffa45e': '#555'; 
  
                } else if (route.name === 'SellerChatView') {
                  iconName = 'envelope-open-text';
                  size = focused ? 23 : 20;
                  color = focused ? '#ffa45e': '#555';
  
                } else if (route.name === 'SellerProfileView') {
                    iconName = 'user-alt';
                    size = focused ? 23 : 20;
                    color = focused ? '#ffa45e': '#555';
                } else if (route.name === 'SellerNotification') {
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
            <Seller.Screen
                name='SellerProductView'
                component={Add_ProductView}
                options = {{
                    title: 'Listing Items',
                    headerTintColor: '#808080',
                }}
            />
            <Seller.Screen
                name='SellerChatView'
                component={Seller_Chat}
                options = {{
                    title: 'Chat',
                    headerTintColor: '#808080',
                }}

            />

            <Seller.Screen
                name = 'SellerNotification'
                component={Seller_notification}
                options = {{
                    title: 'Notifications',
                    headerTintColor: '#808080',
                }}
            
            />

            <Seller.Screen
                name = 'SellerProfileView'
                component={Seller_Profile}
                options = {{
                    headerShown: false, 
                    headerTintColor: '#808080',
                }}
            
            />  

            
        </Seller.Navigator>


    );
};



export default Seller_Tab;