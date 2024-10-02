import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    HomeStackScreen,
    ProfileStackScreen,
    UploadStackScreen,
    ExploreStackScreen,
} from "./screens/index"

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="HomeStack" component={HomeStackScreen} />
        <Tab.Screen name="ProfileStackScreen" component={ProfileStackScreen} />
        <Tab.Screen name="UploadStackScreen" component={UploadStackScreen} />
        <Tab.Screen name="ExploreStackScreen" component={ExploreStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}