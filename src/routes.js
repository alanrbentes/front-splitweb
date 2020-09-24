import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SignInScreen from './pages/SignIn';
import SignUpScreen from './pages/SignUp';
import SearchScreen from './pages/Search';
import AccountScreen from './pages/Account';
import ApparatusScreen from './pages/Apparatus';
import OrderServiceScreen from './pages/OrderOfService';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function getHeaderTitle(route) {

  const routeName = getFocusedRouteNameFromRoute(route) ?? 'search';

  switch (routeName) {
    case 'search':
      return 'Lista de clientes';
    case 'account':
      return 'Cadastro de clientes';
    case 'apparatus':
      return 'Cadastro de aparelhos';
    case 'os':
      return 'Ordem de serviço';
  }
}

function RoutesTabs() {
  return (
    <Tab.Navigator tabBarOptions={{
      activeTintColor: '#FFF',
      inactiveTintColor: 'rgba(255, 255, 255, 0,6)',
      style: {
        backgroundColor: '#8d41a8',
      },
      keyboardHidesTabBar: true,
    }}>

      <Tab.Screen name="search" component={SearchScreen} options={
        {
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="home"
              color={color}
              size={30} />
          ),
          title: 'Lista de clientes',
        }} />
      <Tab.Screen name="account" component={AccountScreen} options={{
        tabBarLabel: 'Cliente',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account-check-outline" color={color} size={30} />
        ),
      }} />
      <Tab.Screen name="apparatus" component={ApparatusScreen} options={{
        tabBarLabel: 'Aparelho',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="car-defrost-rear" color={color} size={30} />
        ),
      }} />
      <Tab.Screen name="os" component={OrderServiceScreen} options={{
        tabBarLabel: 'Ordem de Serviço',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="file-document-edit-outline" color={color} size={30} />
        ),
      }} />

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
              <Stack.Screen name="SplitWeb" component={RoutesTabs} options={({ route }) => ({ headerTitle: getHeaderTitle(route) })} />
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