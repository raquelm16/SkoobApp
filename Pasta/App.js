import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import 'react-native-gesture-handler';
//import { createDrawerNavigator } from '@react-navigation/drawer';

import inicio from './src/screens/inicio';
import login from './src/screens/login';
import cadastro from './src/screens/cadastro';
import biblioteca from './src/screens/biblioteca';

//const Drawer = createDrawerNavigator();

//function MyDrawer() {
//  return (
//    <Drawer.Navigator>
//      <Drawer.Screen name="login" component={login} />
//      <Drawer.Screen name="cadastro" component={cadastro} />
//    </Drawer.Navigator>
//  );
//}



const Stack = createNativeStackNavigator();

function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="inicio" screenOptions={{
          headerShown: false,
        }}>
          <Stack.Screen name="inicio" component={inicio} options={{ title: 'Início' }} />
          <Stack.Screen name="login" component={login} options={{ title: 'Login' }} />
          <Stack.Screen name="cadastro" component={cadastro} options={{ title: 'Cadastro' }} />
          <Stack.Screen name="biblioteca" component={biblioteca} options={{ title: 'Biblioteca' }} />
        </Stack.Navigator>

    {/*   <MyDrawer></MyDrawer> */}

      </NavigationContainer >

  );
}

export default App;
