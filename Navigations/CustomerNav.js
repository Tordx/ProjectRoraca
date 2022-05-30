
import React from 'react';
import { 
    
    createDrawerNavigator, 
    DrawerContentScrollView, 
    DrawerItem, 
    DrawerItemList 
} from '@react-navigation/drawer';
import Customer_Tab from './CustomerTab'
import Help_center from '../AppInfo/Help';
import { useNavigation } from '@react-navigation/native';


const Drawer = createDrawerNavigator();

const Logout = (props) => {

    const navigation = useNavigation();

    return (

        <DrawerContentScrollView {...props} >
            <DrawerItemList {...props} />
            <DrawerItem label = 'Logout'
            onPress={() => navigation.navigate('HomeNav')}/>
        </DrawerContentScrollView>

    )

}



const Customer_drawer = () => {
    return (

        <Drawer.Navigator 
        
        initialRouteName='CustomerNav'
        drawerContent={props => <Logout {...props}/>}
        
        >

            <Drawer.Screen

            name = 'CustomerTab'
            component={Customer_Tab}
            options = {{

               title: 'Account',
                drawerActiveBackgroundColor: '#225',
                drawerActiveTintColor: '#e2e2e2',
                drawerIcon: () => null,
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
                  }}
            />
        </Drawer.Navigator>

    );
};


export default Customer_drawer;
