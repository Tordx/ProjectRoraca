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
  import { useNavigation } from '@react-navigation/native';
import Seller_Tab from './SellerTab';

const Drawer = createDrawerNavigator();

function Logout1(props) {

    const navigation = useNavigation();
  
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem label="Logout" onPress={() => navigation.navigate('Home')} />
        
      </DrawerContentScrollView>
    );
  };


function Seller_drawer () {
    

    return (

            <Drawer.Navigator
            initialRouteName='SellerTab'
            drawerContent={props => <Logout1 {...props} />}
            >

                <Drawer.Screen
            
                name = 'SellerTab'
                component={Seller_Tab}
                options={{
                    title: 'Account',
                    drawerActiveBackgroundColor: '#225',
                    drawerActiveTintColor: '#e2e2e2',
                    drawerIcon: () => null,
                    headerShown: false,
                    }}
                />

                <Drawer.Screen
                name='Help'
                component={Help_center}
                />

            

        </Drawer.Navigator>

    );
};


export default Seller_drawer;
