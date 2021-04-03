import React from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Catalog from './pages/Catalog';
import Cart from './pages/Cart';
import Header from './components/Header';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: true,
          cardStyle: { backgroundColor: '#313746' }
        }}
        initialRouteName='Catalog'
      >
        <Screen
          name="catalog"
          component={Catalog}
          options={{
            headerShown: true,
            headerTransparent: true,
            headerTitle: () => <Header />
          }}
        />

        <Screen
          name="cart"
          component={Cart}
          options={{
            headerTransparent: true,
            headerTitle: () => <Header />,
            headerBackTitleVisible: false,
            headerLeftContainerStyle: {
              marginLeft: 20
            },
            headerBackImage: () => (
              <FeatherIcon name='chevron-left' size={24} color='#f3f9ff' />
            )
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};