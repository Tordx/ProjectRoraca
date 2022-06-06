import React from 'react';
import {

  View,
  Text,

} from 'react-native';
import Default_Screen from './Home';
import Help_center from '../AppInfo/Help';
import Login_view from './LoginView'
import Create_view from './CreateView'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem  } from '@react-navigation/drawer';
import Rates_ from '../AppInfo/Rates';
import Tracking_ from '../AppInfo/Tracking';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const Drawer = createDrawerNavigator();

function Version(props) {

  return (
      <View style = {{flex: 1}}>
    <DrawerContentScrollView 
    {...props}
    >
      <DrawerItemList 
      {...props} 
      />
      
    </DrawerContentScrollView>
              <View style = {{justifyContent: 'center', alignItems: 'center', margin: 5,}}>
                  <Text> roraca 1.0.2022 </Text>
              </View>
          </View>
  );
}

export const Home_drawer = () => {
  return (

    <Drawer.Navigator 
    drawerContent={props => <Version {...props} />}
    screenOptions={{drawerLabelStyle: {marginLeft: -20}}}
    > 
        <Drawer.Screen
        
              name = 'Home'
              component={Default_Screen}
              options={{  
                title: 'Home',
                    drawerActiveBackgroundColor: '#225',
                    drawerActiveTintColor: '#e2e2e2',
                    drawerIcon: ({color}) => (
                      <FontAwesome5
                      
                        name='home'
                        size={20}
                        color = {color}

                      />
                    ),
                    headerShown: false,
              }}

        />
        
        <Drawer.Screen
        
        name = 'Login'
        component={Login_view}
        options={{
          title: 'Login',
                    drawerActiveBackgroundColor: '#225',
                    drawerActiveTintColor: '#e2e2e2',
                    drawerIcon: ({color}) => (
                      <FontAwesome5
                      
                        name='sign-in-alt'
                        size={20}
                        color = {color}

                      />
                    ),
                    headerShown: false,
        }}

        />

        <Drawer.Screen
        
        name = 'Create Account'
        component={Create_view}
        options={{
          title: 'Create Account',
                    drawerActiveBackgroundColor: '#225',
                    drawerActiveTintColor: '#e2e2e2',
                    drawerIcon: ({color}) => (
                      <FontAwesome5
                      
                        name='user-plus'
                        size={20}
                        color = {color}

                      />
                    ),
        }}

        />

        <Drawer.Screen
        
              name = 'Help'
              component={Help_center}
              options={{  
                title: 'Help Center',
                    drawerActiveBackgroundColor: '#225',
                    drawerActiveTintColor: '#e2e2e2',
                    headerShown: true,
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
}

