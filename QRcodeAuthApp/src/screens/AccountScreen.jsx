import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const AccountScreen = () => {
  const navigation = useNavigation();
  const handleLogout = () => {
    AsyncStorage.removeItem('authToken');
    navigation.replace('Login');
  };
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: '#ffffff', paddingHorizontal: 12}}>
      <ScrollView>
        <View>
          <Text>AccountScreen</Text>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={handleLogout}
            style={{
              backgroundColor: 'red',
              text: '#FFF',
            }}>
            <Text>logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({});
