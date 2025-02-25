import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import SessionScreen from '../screens/SessionScreen';
import AccountScreen from '../screens/AccountScreen';
import Icon from 'react-native-vector-icons/Feather';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Define Tab Navigation
function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size, focused, tintColor}: any) => {
            return <Icon name="home" color="#F3C81DFF" size={20} />;
          },
        }}
      />
      <Tab.Screen
        name="Session"
        component={SessionScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size, focused, tintColor}: any) => {
            return <Icon name="info" color="#F3C81DFF" size={20} />;
          },
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size, focused, tintColor}: any) => {
            return <Icon name="user" color="#F3C81DFF" size={20} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default function RootNavigation({isLoggedIn}) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!isLoggedIn ? (
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Screen
            name="Main"
            component={TabNavigator}
            options={{headerShown: false}}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
