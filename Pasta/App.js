import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import inicio from './src/screens/inicio';
import login from './src/screens/login';
import cadastro from './src/screens/cadastro';
import biblioteca from './src/screens/biblioteca';

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

{/*
function App() {
  return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="inicio" screenOptions={{headerShown: false,}}>
          <Stack.Screen name="inicio" component={inicio} options={{ title: 'Início' }} />
          <Stack.Screen name="login" component={login} options={{title:'Login'}} />
          <Stack.Screen name="cadastro" component={cadastro} options={{title:'Cadastro'}} />
          <Stack.Screen name="biblioteca" component={biblioteca} options={{ title: 'Biblioteca' }} />
      </Stack.Navigator>   
      <Tab.Navigator>
      <Tab.Screen name="login" component={login} options={{ title: 'Login' }} />
    <Tab.Screen name="cadastro" component={cadastro} options={{ title: 'Cadastro' }} />
      </Tab.Navigator>
      </NavigationContainer>
  );
}
*/}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="inicio" screenOptions={{headerShown: false,}}>
        <Stack.Screen name="inicio" component={inicio} />
        <Stack.Screen name="login" component={login} />
        <Stack.Screen name="cadastro" component={cadastro} />
        <Stack.Screen name="biblioteca" component={biblioteca} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="login" component={login} />
      <Tab.Screen name="cadastro" component={cadastro} />
    </Tab.Navigator>
  );
}

export default App;
