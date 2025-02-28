import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const AccountScreen = () => {
  const navigation = useNavigation();

  const handleLogout = async () => {
    await AsyncStorage.removeItem('authToken');
    navigation.replace('Login');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.flexContainer}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView contentContainerStyle={styles.scrollView} keyboardShouldPersistTaps="handled">
            <View style={styles.container}>

              {/* Profile Image */}
              <View style={styles.profileContainer}>
                <Image
                  source={{ uri: 'https://avatars.githubusercontent.com/u/60755847?v=4' }}
                  style={styles.profileImage}
                />
              </View>

              {/* Username */}
              <Text style={styles.userName}>kahnu044</Text>

              {/* Account Details */}
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Your Email</Text>
                <View style={styles.inputField}>
                  <Icon name="email-outline" size={26} color="#B0B0B0" />
                  <TextInput style={styles.input} placeholder="kahnu@gmail.com" />
                </View>

                <Text style={styles.label}>First Name</Text>
                <View style={styles.inputField}>
                  <Icon name="account" size={26} color="#B0B0B0" />
                  <TextInput style={styles.input} placeholder="kahnu" />
                </View>

                <Text style={styles.label}>Last Name</Text>
                <View style={styles.inputField}>
                  <Icon name="account" size={26} color="#B0B0B0" />
                  <TextInput style={styles.input} placeholder="swain" />
                </View>

                <Text style={styles.label}>Old Password</Text>
                <View style={styles.inputField}>
                  <Icon name="lock-outline" size={18} color="#B0B0B0" />
                  <TextInput style={styles.input} placeholder="********" secureTextEntry />
                  <Icon name="eye" size={18} color="#B0B0B0" />
                </View>

                <Text style={styles.label}>New Password</Text>
                <View style={styles.inputField}>
                  <Icon name="lock-outline" size={18} color="#B0B0B0" />
                  <TextInput style={styles.input} placeholder="********" secureTextEntry />
                  <Icon name="eye" size={18} color="#B0B0B0" />
                </View>
              </View>

              {/* Logout Button */}
              <TouchableOpacity activeOpacity={0.9} onPress={handleLogout} style={styles.logoutButton}>
                <Text style={styles.logoutText}>Logout</Text>
              </TouchableOpacity>

            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 12
  },
  flexContainer: {
    flex: 1
  },
  scrollView: {
    flexGrow: 1
  },
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center'
  },
  profileContainer: {
    position: 'relative',
    alignItems: 'center'
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10
  },
  inputContainer: {
    width: '100%',
    marginTop: 20
  },
  label: {
    fontSize: 14,
    color: '#B0B0B0',
    marginBottom: 5
  },
  inputField: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0'
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#000'
  },
  logoutButton: {
    marginTop: 20,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#366cf2',
    paddingVertical: 14,
    paddingHorizontal: 50,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center'
  },
  logoutText: {
    color: '#366cf2',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
