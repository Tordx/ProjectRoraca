
//////////////////////// Screens ////////////////////////////////

import  Login_view  from './Navigations/LoginView';
import  Create_view  from './Navigations/CreateView';
import Splash from './Navigations/splashView';
import Store_List from './CustomerScreen/StoreList';
import _checkout from './CustomerScreen/checkout';
import _StoreItemList from './CustomerScreen/StoreProfile_CSVIEW';
import Menu_List from './CustomerScreen/MenuList';
import Product_Listing from './CustomerScreen/ProductListing';
import Product_container from './CustomerScreen/ProductContainer';
import Add_Product from './SellerScreen/AddProduct';
import Drinks from './CustomerScreen/ProductCategoryItems/Drinks';
import FastFood from './CustomerScreen/ProductCategoryItems/FastFood';
import Fruits from './CustomerScreen/ProductCategoryItems/Fruits';
import Liquors from './CustomerScreen/ProductCategoryItems/Liquors';
import Meal from './CustomerScreen/ProductCategoryItems/Pastry';
import Snacks from './CustomerScreen/ProductCategoryItems/Snacks';
import Vegan from './CustomerScreen/ProductCategoryItems/Vegan';
import Pastry from './CustomerScreen/ProductCategoryItems/Pastry';
import Driver_drawer from './Navigations/DriverNav';
import Seller_drawer from './Navigations/SellerNav';
import CustomerParcel from './View/CustomerParcel';
import { Home_drawer } from './Navigations/HomeNav';
import Help_center from './AppInfo/Help'
import About_ from './AppInfo/About';
////////////////////////// Components ////////////////////////////
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import  store  from './Redux/Store';

import React from 'react';
import UpdateItem from './Components/UpdateItem';
import Customer_drawer from './Navigations/CustomerNav';


// App.js should be clean


export default function App() {





  const Stack = createNativeStackNavigator();


  return (
    
      <Provider store={store}>
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
    
              name = 'HomeNav'
              component={Home_drawer}
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
    
              name = 'CustomerNav'
              component={Customer_drawer}
              options={{  
              headerShown: false,
               
              }} 

            />

            <Stack.Screen
            
              name = 'SellerNav'
              component={Seller_drawer}
              options={{  
                headerShown: false,
                 
                }} 
  
            
            />
            <Stack.Screen
            
              name = 'Dri'
              component={Driver_drawer}
              options={{  
                headerShown: false,
                 
                }} 
  
            
            />
            
             <Stack.Screen
    
              name = 'StoreList'
              component={Store_List}
              headerBackAccessibilityLabel = {true}
              options = {{ 
                headerTintColor: '#808080',
                title: 'Food Lane',
              }}

              />
              <Stack.Screen
    
              name = 'checkout'
              component={_checkout}
              headerBackAccessibilityLabel = {true}
              options ={{
                headerTintColor: '#808080',
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
              headerTintColor: '#808080',
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
                headerTintColor: '#808080',
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
                headerTintColor: '#808080',
              },
              headerSearchBarOptions: {
              autoCapitalize: 'none',
              obscureBackground: false,
              placeholder: 'Satisfy your Cravings!'
              },
              }} 
              
            />

            <Stack.Screen
    
              name = 'ProductContainer'
              component={Product_container}
              headerBackAccessibilityLabel = {true}
              options = {{ title: '',
              headerStyle: {
                headerTintColor: '#808080',
              },
              headerSearchBarOptions: {
              autoCapitalize: 'none',
              obscureBackground: false,
              placeholder: 'Craving for anything else?'
              },
            
              }} 
              
            />

            <Stack.Screen
            
              name = 'AddProduct'
              component={Add_Product}
              options = {{
              title: 'Add Product '
              }}


            />
            <Stack.Screen
            
            name = 'Liquors'
            component={Liquors}
            options = {{
            title: 'Liquors & Beers'
            }}


          />
          <Stack.Screen
            
            name = 'Drinks'
            component={Drinks}
            options = {{
            title: 'Drinks'
            }}


          />
          <Stack.Screen
            
            name = 'FastFood'
            component={FastFood}
            options = {{
            title: 'FastFood'
            }}


          />
          <Stack.Screen
            
            name = 'Fruits'
            component={Fruits}
            options = {{
            title: 'Fruits'
            }}


          />
          <Stack.Screen
            
            name = 'Meal'
            component={Meal}
            options = {{
            title: 'Meal'
            }}


          />
          <Stack.Screen
            
            name = 'Pastry'
            component={Pastry}
            options = {{
            title: 'Pastry'
            }}


          />
          <Stack.Screen
            
            name = 'Snacks'
            component={Snacks}
            options = {{
            title: 'Snacks'
            }}


          />
          <Stack.Screen
            
            name = 'Vegan'
            component={Vegan}
            options = {{
            title: 'Vegan'
            }}


          />

          <Stack.Screen
            
            name = 'Help'
            component={Help_center}
            options = {{
            title: 'roraca'
            }}
            
          />

          <Stack.Screen
            
            name = 'About'
            component={About_}
            options = {{
            title: 'roraca'
            }}
            
          />
          <Stack.Screen
            
            name = 'CustomerParcel'
            component={CustomerParcel}
            options = {{
            title: 'CustomerParcel'
            }}
            
          />


          
          
          
            

          </Stack.Navigator>
      </NavigationContainer>
      </Provider>
  );  
}