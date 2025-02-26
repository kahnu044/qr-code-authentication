import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const ScanQrCodeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'gray'}}>
      <View>
        <Text>ScanQrCodeScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default ScanQrCodeScreen;

const styles = StyleSheet.create({});
