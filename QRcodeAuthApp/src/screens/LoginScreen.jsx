import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {loginUser} from '../api/auth';
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation(); // Hook to access navigation

  // Alert function
  const alert = () => {};

  const handleLogin = async () => {
    setLoading(true);

    try {
      const data = await loginUser(email, password);

      console.log('success', data);
      await AsyncStorage.setItem("authToken", data.token);
      navigation.replace("Main");
    } catch (error) {
      Alert.alert('Error!', error?.error, [
        {
          text: 'Cancel',
        },
        {
          text: 'OK',
        },
      ]);
    }
    setLoading(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Login here</Text>
      <Text style={styles.subtitle}>Welcome back you’ve been missed!</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#888"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#888"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* <TouchableOpacity  activeOpacity={0.9}>
        <Text style={styles.forgotPassword}>Forgot your password?</Text>
      </TouchableOpacity> */}

      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.button}
        onPress={handleLogin}>
        <Text style={styles.buttonText}>
          {loading ? (
            <ActivityIndicator size="large" color="#FFFFFF" />
          ) : (
            'Sign in'
          )}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F9FC',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1F41BB',
    marginVertical: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#000000',
    marginBottom: 50,
  },
  input: {
    width: '100%',
    backgroundColor: '#E5E7EB',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    color: '#1E3A8A',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#1E3A8A',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 55,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
