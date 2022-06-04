//import liraries
import React from 'react';
import {Add_ProductView} from '../View/SellerProductView';
import {Seller_Chat} from '../View/SellerChatView';
import {Seller_Profile}  from '../View/SellerProfileView';
import Help_center from '../AppInfo/Help';
import { 

    createDrawerNavigator,
    DrawerItem,
    DrawerContentScrollView,
    DrawerItemList
  
  } from '@react-navigation/drawer';
import Seller_Tab from './SellerTab';
import Tracking_ from '../AppInfo/Tracking';
import Drawer_Contents from './DrawerContents';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Drawer = createDrawerNavigator();


function Seller_drawer () {
    

    return (

            <Drawer.Navigator
            initialRouteName='SellerTab'
            drawerContent={props => <Drawer_Contents {...props} />}
            screenOptions={{drawerLabelStyle: {marginLeft: -20}}}
            >

                <Drawer.Screen
            
                name = 'SellerTab'
                component={Seller_Tab}
                options={{
                    title: 'Account',
                    drawerActiveBackgroundColor: '#225',
                    drawerActiveTintColor: '#e2e2e2',
                    headerShown: false,
                    drawerIcon: ({color}) => (
                      <FontAwesome5
                      
                        name='home'
                        size={20}
                        color = {color}

                      />
                    ),
                    }}
                />

                <Drawer.Screen
                name='Help'
                component={Help_center}
                options = {{
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


export default Seller_drawer;
