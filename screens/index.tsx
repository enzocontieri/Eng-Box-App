import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./Tabs/Home";
import Upload from "./Tabs/Upload";
import Profile from "./Tabs/Profile";
import Explore from "./Tabs/Explore";
import User from "./pages/User";
import Settings from './pages/Settings';

export {
    HomeScreen,
    ProfileScreen,
    UploadScreen,
    ExploreScreen,
}

const HomeStack = createNativeStackNavigator();

function HomeScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen 
      name="HomeScreen" 
      component={Home} 
      options={{
        headerShown: false
      }}/>
    </HomeStack.Navigator>
  );
}

const ProfileStack = createNativeStackNavigator();

function  ProfileScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen 
      name="ProfileScreen" 
      component={Profile} 
      options={{
        headerShown: false
      }}/>
    </ProfileStack.Navigator>
  );
}

const UploadStack = createNativeStackNavigator();

function UploadScreen() {
  return (
    <UploadStack.Navigator>
      <UploadStack.Screen 
      name="UploadScreen" 
      component={Upload} 
      options={{
        headerShown: false
      }}/>
    </UploadStack.Navigator>
  );
}
const ExploreStack = createNativeStackNavigator();

function ExploreScreen() {
  return (
    <ExploreStack.Navigator>
      <ExploreStack.Screen 
      name="ExploreScreen" 
      component={Explore} 
      options={{
        headerShown: false
      }}/>
      <ExploreStack.Screen 
      name="User" 
      component={User} 
      options={{
        headerShown: false
      }}/>
      <ExploreStack.Screen 
      name="Settings" 
      component={Settings} 
      options={{
        headerShown: false
      }}/>
    </ExploreStack.Navigator>
  );
}

