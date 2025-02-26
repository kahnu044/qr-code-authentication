import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import ScanQrCodeScreen from '../screens/ScanQrCodeScreen';
import AccountScreen from '../screens/AccountScreen';
import Icon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {View, Text} from 'react-native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Define Tab Navigation
function TabNavigator() {

  let tabPrimaryColor = '#366cf2';
  let tabSecondaryColor = tabSecondaryColor;

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {
          height: 80,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          position: 'absolute',
          backgroundColor: 'white',
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icon
              name="home"
              color={focused ? tabPrimaryColor : tabSecondaryColor}
              size={20}
            />
          ),
          tabBarLabelStyle: {
            color: tabPrimaryColor,
          },
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? tabPrimaryColor : tabSecondaryColor,
                fontSize: 12,
              }}>
              Home
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="ScanQRCode"
        component={ScanQrCodeScreen}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <View
              style={{
                width: 70,
                height: 70,
                backgroundColor: '#366cf2',
                borderRadius: 35,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <MaterialCommunityIcons
                name="qrcode-scan"
                size={35}
                color="white"
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icon
              name="user"
              color={focused ? tabPrimaryColor : tabSecondaryColor}
              size={20}
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? tabPrimaryColor : tabSecondaryColor,
                fontSize: 12,
              }}>
              Account
            </Text>
          ),
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
