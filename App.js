

//////////////////////// Screens ////////////////////////////////
import  Default_Screen from './screens/Home';
import  Login_view  from './screens/LoginView';
import  Create_view  from './screens/CreateView';
import  Tab_view  from './screens/TabView';
import Splash from './screens/splashView';
import Product_list from './utils/StoreList';
import _checkout from './utils/checkout';
import _StoreItemList from './utils/StoreProfile_CSVIEW';
import Menu_List from './utils/MenuList';
import Product_Listing from './utils/ProductListing';
import Product_container from './utils/ProductContainer';
////////////////////////// Components ////////////////////////////
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// App.js should be clean


export default function App() {

  const Stack = createNativeStackNavigator();


  return (
    

      <NavigationContainer
      >
          <Stack.Navigator initialRouteName = 'Splash'>

            <Stack.Screen
    
              name = 'Splash'
              component={Splash}
              options={{  
              headerShown: false,  
              }} 

            />
            <Stack.Screen
    
              name = 'Home'
              component={Default_Screen}
              options={{  
                headerShown: false,  
              }} 
        
            />

            <Stack.Screen
    
              name = 'LoginView'
              component={Login_view}
              options={{  
                headerShown: false,  
              }} 
    
            />

            <Stack.Screen
    
              name = 'CreateView'
              component={Create_view}
              options = {{
                headerShown: false,  
              }} 
    
            />

            <Stack.Screen
    
              name = 'TabView'
              component={Tab_view}
              options={{  
              headerShown: false,
               
              }} 

            />
             <Stack.Screen
    
              name = 'ProductList'
              component={Product_list}
              headerBackAccessibilityLabel = {true}
              options = {{ 
              headerStyle: {
                backgroundColor: '#222255'},
                headerTintColor: '#e2e2e2',
                title: 'Food Lane',
              }}

              />
              <Stack.Screen
    
              name = 'checkout'
              component={_checkout}
              headerBackAccessibilityLabel = {true}
             options ={{
                headerTintColor: '#225',
                title: 'Check Out',
            headerSearchBarOptions: {
              autoCapitalize: 'none',
              obscureBackground: false,
              placeholder: 'Craving for anything else?'
            },
             }}
            />
            <Stack.Screen
            
             name = 'StoreProfile_CSVIEW'
             component={_StoreItemList}
             options ={{
              title: '',
              headerTintColor: '#225',
            headerSearchBarOptions: {
              autoCapitalize: 'none',
              obscureBackground: false,
              placeholder: 'Craving for anything else?'
            },
            }}
              headerBackAccessibilityLabel = {true}
              

            />
            <Stack.Screen
    
            name = 'MenuList'
            component={Menu_List}
            headerBackAccessibilityLabel = {true}
            options = {{ title: 'Appetizers',
            headerStyle: {
            headerTintColor: '#222255',
            },
            headerSearchBarOptions: {
              autoCapitalize: 'none',
              obscureBackground: false,
              placeholder: 'Craving for anything else?'
            },
            }}

            />

            <Stack.Screen
    
            name = 'ProductListing'
            component={Product_Listing}
            headerBackAccessibilityLabel = {true}
            options = {{ title: 'Products',
            headerStyle: {
            headerTintColor: '#222255',
            },
            headerSearchBarOptions: {
              autoCapitalize: 'none',
              obscureBackground: false,
              placeholder: 'Satisfy your Cravings!'
            },
            }} />

            <Stack.Screen
    
            name = 'ProductContainer'
            component={Product_container}
            headerBackAccessibilityLabel = {true}
            options = {{ title: '',
            headerStyle: {
            headerTintColor: '#222255',
            },
            headerSearchBarOptions: {
              autoCapitalize: 'none',
              obscureBackground: false,
              placeholder: 'Craving for anything else?'
            },
            
            }} />
            

          </Stack.Navigator>
      </NavigationContainer>
  );
}