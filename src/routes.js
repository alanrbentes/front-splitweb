import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './pages/Home';
import SignInScreen from './pages/SignIn';
import SignUpScreen from './pages/SignUp';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function RoutesTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
  );
}


export default function App(isSignedIn) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SignIn'>

        {
          isSignedIn ? (
            <>
              <Stack.Screen name="Home" component={RoutesTabs} />
            </>
          ) : (
              <>
                <Stack.Screen name="SignIn" component={SignInScreen} />
                <Stack.Screen name="SignUp" component={SignUpScreen} />
              </>
            )
        }

      </Stack.Navigator>
    </NavigationContainer>
  );
}