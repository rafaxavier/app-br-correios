// eslint-disable-next-line import/no-extraneous-dependencies
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import EncomendasScreen from '../screens/EncomendasScreen';
import LojasScreen from '../screens/LojasScreen';

const Tab = createMaterialTopTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 12, color: '#fff' },
        tabBarItemStyle: {},
        tabBarStyle: {
          backgroundColor: '#153FA7',
          paddingTop: 20,
        },
      }}
    >
      <Tab.Screen name="Encomendas" component={EncomendasScreen} />
      <Tab.Screen name="Lojas" component={LojasScreen} />
    </Tab.Navigator>
  );
}
