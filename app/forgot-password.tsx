// app/forgot-password.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { useRouter } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

export default function ForgotPasswordScreen() {
  const router = useRouter();
  const [mobile, setMobile] = useState('');

  return (
    <View style={styles.container}>
      {/* Back */}
      <TouchableOpacity style={styles.back} onPress={() => router.back()}>
        <AntDesign name="arrowleft" size={24} color="#fff" />
      </TouchableOpacity>

      <Text style={styles.header}>FORGOT PASSWORD</Text>
      <Text style={styles.subtext}>
        Please enter your registered mobile number to receive a verification code
      </Text>

      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Mobile Number"
          placeholderTextColor="#555"
          keyboardType="phone-pad"
          value={mobile}
          onChangeText={setMobile}
        />
      </View>

      <TouchableOpacity style={styles.sendButton}>
        <Text style={styles.sendText}>SEND</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {/* logic khác */}}>
        <Text style={styles.tryAnother}>Try Another Way</Text>
      </TouchableOpacity>
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
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 12,
    textAlign: 'center',
  },
  subtext: {
    color: '#888',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 20,
  },
  inputWrapper: {
    backgroundColor: '#222',
    borderRadius: 12,
    paddingHorizontal: 12,
    marginBottom: 20,
    height: 48,
    justifyContent: 'center',
  },
  input: {
    color: '#fff',
  },
  sendButton: {
    backgroundColor: 'rgba(41,161,156,0.8)',
    borderRadius: 24,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 20,
  },
  sendText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  tryAnother: {
    color: '#29a19c',
    textAlign: 'center',
    fontSize: 14,
  },
});
