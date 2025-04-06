import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function IntroScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Striving to improve community health care and practices
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/login')}
      >
        <Text style={styles.buttonText}>GET STARTED →</Text>
      </TouchableOpacity>
    <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
      <Image
        source={require('../assets/images/pngegg (2) 1.png')}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
    </View>
  );    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      padding: 24,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      color: '#fff',
      fontSize: 22,
      textAlign: 'center',
      marginBottom: 40,
    },
    button: {
      backgroundColor: 'rgba(41,161,156,0.8)',
      paddingHorizontal: 24,
      paddingVertical: 12,
      borderRadius: 24,
     marginBottom: 200,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
    },
    image: {
        position: 'absolute',
        bottom: 0,           // ép sát đáy
        width: 800,        // chiếm 80% chiều ngang
        height: 300,       // chiếm 30% chiều dọc
        alignSelf: 'center', // canh giữa ngang
      },
  });