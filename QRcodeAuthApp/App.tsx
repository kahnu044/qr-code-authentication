import React, {useState} from 'react';
import RootNavigation from './src/routes/rootNavigation';

const home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return <RootNavigation isLoggedIn={isLoggedIn} />;
};
export default home;
