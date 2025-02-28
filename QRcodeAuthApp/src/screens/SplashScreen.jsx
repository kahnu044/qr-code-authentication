import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SplashScreen = () => {
  return (
    <View style={styles.splashContainer}>
      <MaterialCommunityIcons name="qrcode-scan" size={55} color="#366cf2" />
      <Text style={styles.splashText}>
        Welcome{'\n'} To {'\n'} QRCodeAuth
      </Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  //   splashImage: {
  //     width: 200,
  //     height: 200,
  //     resizeMode: 'contain',
  //   },
  splashText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#366cf2',
  },
});
