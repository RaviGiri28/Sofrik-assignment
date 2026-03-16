import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { ShoppingCart, ShoppingBag } from 'lucide-react-native';
import { View, Text } from 'react-native';

import { RootStackParamList, TabParamList } from './types';
import { useCartStore } from '../store/useCartStore';
import ProductListScreen from '../screens/ProductListScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import CartScreen from '../screens/CartScreen';

const Tab = createBottomTabNavigator<TabParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

function TabNavigator() {
  const itemCount = useCartStore((state) => state.getItemCount());

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#6366f1',
        tabBarInactiveTintColor: '#94a3b8',
        headerShown: true,
      }}
    >
      <Tab.Screen
        name="Products"
        component={ProductListScreen}
        options={{
          tabBarIcon: ({ color, size }: { color: string, size: number }) => <ShoppingBag color={color} size={size} />,
          title: 'Shop',
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ color, size }: { color: string, size: number }) => <ShoppingCart color={color} size={size} />,
          tabBarBadge: itemCount > 0 ? itemCount : undefined,
          title: 'My Cart',
        }}
      />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainTabs" component={TabNavigator} />
        <Stack.Screen 
          name="ProductDetail" 
          component={ProductDetailScreen} 
          options={{ headerShown: true, title: 'Product Details' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
