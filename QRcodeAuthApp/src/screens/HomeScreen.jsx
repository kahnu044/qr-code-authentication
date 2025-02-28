import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
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

        <View
          style={{
            backgroundColor: '#F4F4F4',
            padding: 10,
            borderRadius: 10,
            marginTop: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'column', gap: 5}}>
              <Text
                style={{color: '#000000', fontWeight: 'bold', fontSize: 16}}>
                Session - 1, from Chrome - Mac OS
              </Text>
              <Text
                style={{color: '#B2B0B0', fontWeight: 'bold', fontSize: 14}}>
                Last seen : 10:00 AM
              </Text>
            </View>
            <Icon name="logout" size={30} color={'#000'} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
