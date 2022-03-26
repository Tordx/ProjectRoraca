import React from 'react';
import  Home_view from './Screen Components/screens/Home';
import  Login_view  from './Screen Components/screens/LoginView';
import  Create_view  from './Screen Components/screens/CreateView';
import  Tab_view  from './Screen Components/screens/TabView';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// App.js should be clean


export default function App() {

  const Stack = createNativeStackNavigator();

  return (

      <NavigationContainer>
          <Stack.Navigator initialRouteName = 'Home'>
            <Stack.Screen
    
              name = 'Home'
              component={Home_view}
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
              options={{  
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

          </Stack.Navigator>
      </NavigationContainer>
  );
}