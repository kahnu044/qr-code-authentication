import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const SessionScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'gray'}}>
      <View>
        <Text>SessionScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default SessionScreen;

const styles = StyleSheet.create({});
