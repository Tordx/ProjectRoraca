

//////////////////////// Screens ////////////////////////////////
import  Default_Screen from './Navigations/Home';
import  Login_view  from './Navigations/LoginView';
import  Create_view  from './Navigations/CreateView';
import  Customer_Tab  from './Navigations/CustomerTab';
import Splash from './Navigations/splashView';
import Store_List from './CustomerScreen/StoreList';
import _checkout from './CustomerScreen/checkout';
import _StoreItemList from './CustomerScreen/StoreProfile_CSVIEW';
import Menu_List from './CustomerScreen/MenuList';
import Product_Listing from './CustomerScreen/ProductListing';
import Product_container from './CustomerScreen/ProductContainer';
import Seller_Tab from './Navigations/SellerTab';
import Add_Product from './SellerScreen/AddProduct';
import Liquors from './CustomerScreen/ProductCategoryItems/Liquors';
import Drinks from './CustomerScreen/ProductCategoryItems/Drinks';
import FastFood from './CustomerScreen/ProductCategoryItems/FastFood';
import Fruits from './CustomerScreen/ProductCategoryItems/Fruits';
import Meal from './CustomerScreen/ProductCategoryItems/Meal';
import Pastry from './CustomerScreen/ProductCategoryItems/Pastry';
import Snacks from './CustomerScreen/ProductCategoryItems/Snacks';
import Vegan from './CustomerScreen/ProductCategoryItems/Vegan';
////////////////////////// Components ////////////////////////////
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import  store  from './Redux/Store';

import React from 'react';

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
    
              name = 'CustomerTab'
              component={Customer_Tab}
              options={{  
              headerShown: false,
               
              }} 

            />

            <Stack.Screen
            
              name = 'SellerTab'
              component={Seller_Tab}
              options={{  
                headerShown: false,
                 
                }} 
  
            
            />
             <Stack.Screen
    
              name = 'StoreList'
              component={Store_List}
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
              }} 
              
            />

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
            

          </Stack.Navigator>
      </NavigationContainer>
      </Provider>
  );  
}