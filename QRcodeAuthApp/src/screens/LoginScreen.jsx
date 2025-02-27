import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';

const LoginScreen = () => {
  const handleLogin = () => {
    console.log('Login Button Press');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Login here</Text>
      <Text style={styles.subtitle}>Welcome back you’ve been missed!</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#888"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#888"
        secureTextEntry
      />

      {/* <TouchableOpacity  activeOpacity={0.9}>
        <Text style={styles.forgotPassword}>Forgot your password?</Text>
      </TouchableOpacity> */}

      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.button}
        onPress={handleLogin}>
        <Text style={styles.buttonText}>Sign in</Text>
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
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
