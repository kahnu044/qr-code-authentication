import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import React from 'react';

const HomeScreen = () => {
  console.log('Test fPI Path', process.env.API_PATH);
  let primaryColor = '#366cf2';
  let userName = 'Kahnu';

  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: '#ffffff', paddingHorizontal: 12}}>
      <ScrollView>
        <View>
          <Text style={{color: primaryColor, fontWeight: 'bold', fontSize: 35}}>
            Hi, {userName} 👋
          </Text>
        </View>

        {/* <View
          style={{
            backgroundColor: 'white',
            height: 60,
            padding: 8,
            borderRadius: 10,
            elevation: 10,
            shadowColor: '#000',
            marginTop: 10,
          }}>
          <Text style={{color: primaryColor, fontWeight: 'bold', fontSize: 20}}>
            Session - 1, from Chrome - Mac OS
          </Text>
        </View> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
