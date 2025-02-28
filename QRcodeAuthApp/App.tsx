import React, {useState, useEffect} from 'react';
import RootNavigation from './src/routes/rootNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from './src/screens/SplashScreen';

const home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const token = await AsyncStorage.getItem('authToken');
      setIsLoggedIn(token ? true : false);

      setTimeout(() => {
        setIsLoading(false);
      }, 2500);
    };
    checkAuth();
  }, []);

  // SplashScreen
  if (isLoading) {
    return <SplashScreen />;
  }

  return <RootNavigation isLoggedIn={isLoggedIn} />;
};
export default home;
