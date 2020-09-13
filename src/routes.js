// import {createAppContainer, createSwitchNavigator} from 'react-navigation';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import Dashboard from './pages/Dashboard';

import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SignIn'>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


// const Tab = createBottomTabNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Settings" component={SettingsScreen} />
//     </Tab.Navigator>
//   );
// }

// export default (isSigned = false) =>
//   createAppContainer(
//     createSwitchNavigator(
//       {
//         Authentication: createSwitchNavigator({
//           SignIn,
//           SignUp,
//         }),
//         App: createBottomTabNavigator({
//           Dashboard,
//         }),
//       },
//       {
//         initialRouteName: isSigned ? 'App' : 'Sign',
//       },
//     ),
//   );
