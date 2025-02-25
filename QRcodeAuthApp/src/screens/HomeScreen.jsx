import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import React from 'react';

const HomeScreen = () => {
  console.log("Test fPI Path", process.env.API_PATH)
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'gray'}}>
      <View>
        <Text>HomeScreen</Text>

      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
