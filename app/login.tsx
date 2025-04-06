// app/login.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Switch,
  Dimensions,
} from 'react-native';
import { useRouter } from 'expo-router';
import { FontAwesome, AntDesign, Entypo } from '@expo/vector-icons';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  return (
    <View style={styles.container}>
      {/* Back arrow */}
      <TouchableOpacity style={styles.back} onPress={() => router.back()}>
        <AntDesign name="arrowleft" size={24} color="#fff" />
      </TouchableOpacity>

      <Text style={styles.header}>LOGIN</Text>

      {/* Email */}
      <View style={styles.inputWrapper}>
        <FontAwesome name="envelope" size={20} color="#888" />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#555"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      {/* Password */}
      <View style={styles.inputWrapper}>
        <Entypo name="lock" size={20} color="#888" />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#555"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      {/* Remember + Forgot */}
      <View style={styles.row}>
        <View style={styles.remember}>
          <Switch
            value={remember}
            onValueChange={setRemember}
            thumbColor={remember ? '#29a19c' : '#ccc'}
            trackColor={{ true: '#555', false: '#333' }}
          />
          <Text style={styles.rememberText}>Remember Me</Text>
        </View>
        <TouchableOpacity onPress={() => router.push('/forgot-password')}>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      {/* Login button */}
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      <Text style={styles.or}>OR</Text>

      {/* Social login */}
      <View style={styles.socialRow}>
        <TouchableOpacity style={styles.socialBtn}>
          <FontAwesome name="google" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialBtn}>
          <AntDesign name="apple1" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialBtn}>
          <Entypo name="facebook" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.registerRow}>
        <Text style={styles.registerText}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => router.push('/signup')}>
          <Text style={styles.registerLink}>Register now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 24,
    paddingTop: SCREEN_HEIGHT * 0.08,
  },
  back: {
    marginBottom: 20,
  },
  header: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 30,
    textAlign: 'center',
  },
  inputWrapper: {
    flexDirection: 'row',
    backgroundColor: '#222',
    borderRadius: 12,
    alignItems: 'center',
    paddingHorizontal: 12,
    marginVertical: 8,
    height: 48,
  },
  input: {
    flex: 1,
    marginLeft: 8,
    color: '#fff',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 12,
  },
  remember: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberText: {
    color: '#fff',
    marginLeft: 8,
  },
  forgot: {
    color: '#29a19c',
    fontWeight: '500',
  },
  loginButton: {
    backgroundColor: 'rgba(41,161,156,0.8)',
    borderRadius: 24,
    paddingVertical: 14,
    marginTop: 10,
    alignItems: 'center',
  },
  loginText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  or: {
    color: '#888',
    textAlign: 'center',
    marginVertical: 16,
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  socialBtn: {
    backgroundColor: '#222',
    padding: 12,
    borderRadius: 30,
  },
  registerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  registerText: {
    color: '#888',
  },
  registerLink: {
    color: '#29a19c',
    fontWeight: '500',
  },
});
