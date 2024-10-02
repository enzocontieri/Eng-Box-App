import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./Tabs/HomeScreen";
import UploadScreen from "./Tabs/UploadScreen";
import ProfileScreen from "./Tabs/ProfileScreen";
import ExploreScreen from "./Tabs/ExploreScreen";
import User from "./pages/User";
import Settings from './pages/Settings';

export {
    HomeStackScreen,
    ProfileStackScreen,
    UploadStackScreen,
    ExploreStackScreen,
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="User" component={User} />
    </HomeStack.Navigator>
  );
}

const ProfileStack = createNativeStackNavigator();

function  ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
      <ProfileStack.Screen name="User" component={User} />
      <ProfileStack.Screen name="Settings" component={Settings} />
    </ProfileStack.Navigator>
  );
}

const UploadStack = createNativeStackNavigator();

function UploadStackScreen() {
  return (
    <UploadStack.Navigator>
      <UploadStack.Screen name="Upload" component={UploadScreen} />
      <UploadStack.Screen name="User" component={User} />
    </UploadStack.Navigator>
  );
}
const ExploreStack = createNativeStackNavigator();

function ExploreStackScreen() {
  return (
    <ExploreStack.Navigator>
      <ExploreStack.Screen name="Explore" component={ExploreScreen} />
      <ExploreStack.Screen name="User" component={User} />
    </ExploreStack.Navigator>
  );
}

