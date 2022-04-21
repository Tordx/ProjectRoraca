

//////////////////////// Screens ////////////////////////////////
import  Default_Screen from './screens/Home';
import  Login_view  from './screens/LoginView';
import  Create_view  from './screens/CreateView';
import  Tab_view  from './screens/TabView';
import Splash from './screens/splashView';
import Product_list from './utils/StoreList';
import _checkout from './utils/checkout';
import _Product_Category from './utils/_ProductCategory';
import _StoreItemList from './utils/StoreProfile_CSVIEW';
import MenuFirst from './utils/Menu_First';
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
    
              name = '_ProductCategory'
              component={_Product_Category}
              headerBackAccessibilityLabel = {true}

              />
              <Stack.Screen
    
              name = 'checkout'
              component={_checkout}
              headerBackAccessibilityLabel = {true}
             options ={{
                headerTintColor: '#225',
                title: 'Check Out'
             }}
            />
            <Stack.Screen
            
             name = 'StoreProfile_CSVIEW'
             component={_StoreItemList}
             options ={{
              title: '',
              headerTintColor: '#225',
            }}
              headerBackAccessibilityLabel = {true}

            />
            <Stack.Screen
    
          name = 'Menu_First'
    component={MenuFirst}
    headerBackAccessibilityLabel = {true}
    options = {{ title: 'Appetizers',
    headerStyle: {
      headerTintColor: '#222255',
    }
    }}

    />
            

          </Stack.Navigator>
      </NavigationContainer>
  );
}