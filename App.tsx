import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as Screens from './screens/index';

import { useFonts } from 'expo-font';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: { position: 'absolute' } }}>
      <Tab.Screen name="Home" component={Screens.Home} />
      <Tab.Screen name="Explore" component={Screens.Explore} />
      <Tab.Screen name="Upload" component={Screens.Upload} />
      <Tab.Screen name="Profile" component={Screens.Profile} />
    </Tab.Navigator>
  );
}

export default function App() {

  const [fontsLoaded] = useFonts({
    'poppins-medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf')
  })

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LogIn">
        <Stack.Screen name="Wellcome" component={Screens.Wellcome} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="User" component={Screens.User} options={{ headerShown: false }} />
        <Stack.Screen name="Settings" component={Screens.Settings} options={{ headerShown: false }} />
        <Stack.Screen name="UserDetail" component={Screens.UserDetail} options={{ headerShown: false }} />
        <Stack.Screen name="MoreOptions" component={Screens.MoreOptions} options={{ headerShown: false }} />
        <Stack.Screen name="Help" component={Screens.Help} options={{ headerShown: false }} />
        <Stack.Screen name="Info" component={Screens.Info} options={{ headerShown: false }} />
        <Stack.Screen name="LogOut" component={Screens.LogOut} options={{ headerShown: false }} />
        <Stack.Screen name="Notifications" component={Screens.Notifications} options={{ headerShown: false }} />
        <Stack.Screen name="PersonalData" component={Screens.PersonalData} options={{ headerShown: false }} />
        <Stack.Screen name="PostDetails" component={Screens.PostDetails} options={{ headerShown: false }} />
        <Stack.Screen name="LogIn" component={Screens.LogIn} options={{ headerShown: false }} />
        <Stack.Screen name="ForgotPassword" component={Screens.ForgotPassword} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Screens.Register} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
