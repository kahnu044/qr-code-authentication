import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const ScanQrCodeScreen = () => {
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: '#ffffff', paddingHorizontal: 12}}>
      <ScrollView>
        <View>
          <Text>ScanQrCodeScreen</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ScanQrCodeScreen;

const styles = StyleSheet.create({});
