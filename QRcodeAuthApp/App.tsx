import React, {useState, useEffect} from 'react';
import RootNavigation from './src/routes/rootNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';

const home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const token = await AsyncStorage.getItem('authToken');
      setIsLoggedIn(token ? true : false);
    };
    checkAuth();
  }, []);

  return <RootNavigation isLoggedIn={isLoggedIn} />;
};
export default home;
