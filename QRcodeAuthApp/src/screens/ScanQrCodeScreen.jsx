import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ScanQrCodeScreen = () => {
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: '#ffffff', paddingHorizontal: 12}}>
      <ScrollView>
        <View style={{marginTop: '70%'}}>
          <Text style={{textAlign: 'center', fontSize: 30, fontWeight: 'bold'}}>
            Scan OR code
          </Text>

          <Text
            style={{
              textAlign: 'center',
              fontSize: 16,
              marginTop: 10,
              color: '#B9B9B9',
            }}>
            Place qr code inside the frame to scan please
          </Text>

          <Text
            style={{
              textAlign: 'center',
              fontSize: 16,
              marginTop: 10,
              color: '#B9B9B9',
            }}>
            avoid shake to get results quickly
          </Text>
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '10%',
          }}>
          <MaterialCommunityIcons
            name="qrcode-scan"
            size={100}
            color="#366cf2"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ScanQrCodeScreen;

const styles = StyleSheet.create({});
