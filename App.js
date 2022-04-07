import * as React from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screen/HomeScreen'
import UserForm from './screen/UserFormScreen'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen name="Home" component={Home} 
        options={({navigation})=>({
          headerStyle: {backgroundColor: '#222f3e'},
          headerTitleStyle:{color: '#ffffff'},
          headerRight: ()=>(
              <TouchableOpacity onPress={()=> navigation.navigate('UserForm') }>
                  <Text style ={{color: '#ffffff', marginRight: 20, fontSize: 15}}>New User</Text>
              </TouchableOpacity>
             
          ),

        })} />
        <Stack.Screen name = "UserForm" component={UserForm}
          options = {{
            title: 'Add User',
            headerStyle:{
              backgroundColor: '#222f3e',
            },
            headerTitleStyle: {
              color:'#ffffff'
            },
            headerTintColor: '#ffffff'
              
            
            

          }}
        />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;