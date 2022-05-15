
import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Add_ProductView} from '../View/AddProductView';
import {Seller_Chat} from '../View/SellerChat';
import {Seller_Profile}  from '../View/SellerProfile';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Seller = createBottomTabNavigator();

const Seller_Tab = () => {


    return (

        <Seller.Navigator initialRouteName='AddProductView'

        screenOptions={({route}) => ({
            tabBarIcon:({focused, size, color}) => {
              let iconName;
                if(route.name==='AddProductView'){
                  iconName = 'store';
                  size = focused ? 23 : 20;
                  color = focused ? '#ffa45e': '#555'; 
  
                } else if (route.name === 'SellerChat') {
                  iconName = 'inbox';
                  size = focused ? 23 : 20;
                  color = focused ? '#ffa45e': '#555';
  
                } else if (route.name === 'SellerProfile') {
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
            <Seller.Screen
                name='AddProductView'
                component={Add_ProductView}
            />
            <Seller.Screen
                name='SellerChat'
                component={Seller_Chat}

            />
            <Seller.Screen
                name = 'SellerProfile'
                component={Seller_Profile}
            
            />

            
        </Seller.Navigator>

    )
}
export default Seller_Tab;
