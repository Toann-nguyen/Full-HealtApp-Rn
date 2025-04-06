// // app/user-selection.tsx
// import { View, Text, TouchableOpacity, StyleSheet, Image , Dimensions} from 'react-native';
// import { useRouter } from 'expo-router';
// import LinearGradient from 'react-native-linear-gradient';

// const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// export default function UserSelectionScreen() {
//   const handleDoctor = () => {
//     // router.push('/doctor-login') hoặc logic khác
//   };
//   const handlePatient = () => {
//     // router.push('/patient-login') hoặc logic khác
//   };
// //  // Bạn có thể thêm logic để lưu trạng thái người dùng đã chọn (doctor/patient) vào AsyncStorage hoặc Context API nếu cần thiết.
//   //  // Ví dụ: AsyncStorage.setItem('userRole', 'doctor') hoặc 'patient'
//   const handleAdmin = () => {
//     // router.push('/admin-login') hoặc logic khác
//   };
//     const router = useRouter();
//     const roles = [
//         { key: 'doctor', label: 'BÁC SĨ', img: require('../assets/doctor.png'), route: '/doctor-login' },
//         { key: 'patient', label: 'BỆNH NHÂN', img: require('../assets/patient.png'), route: '/patient-login' },
//         { key: 'admin', label: 'QUẢN TRỊ VIÊN', img: require('../assets/admin.png'), route: '/admin-login' },
//       ];
//   return (
//     // <View style={styles.container}>

        
//     //   <TouchableOpacity style={styles.roleButton} onPress={handleDoctor}>
//     //     <Text style={styles.roleText}>BÁC SĨ</Text>
//     //   </TouchableOpacity>

//     //   <TouchableOpacity style={styles.roleButton} onPress={handlePatient}>
//     //     <Text style={styles.roleText}>BỆNH NHÂN</Text>
//     //   </TouchableOpacity>

//     //   <TouchableOpacity style={styles.roleButton} onPress={handleAdmin}>
//     //     <Text style={styles.roleText}>QUẢN TRỊ VIÊN</Text>
//     //   </TouchableOpacity>

//     //   <Image
//     //     source={require('../assets/images/Medical consultation.png')}
//     //     style={styles.image}
//     //     resizeMode="contain"
//     //   />
//     // </View>
//     <View style={styles.container}>
//     <Text style={styles.title}>User selection</Text>

//     {roles.map(role => (
//       <TouchableOpacity
//         key={role.key}
//         activeOpacity={0.8}
//         onPress={() => router.push(role.route)}
//         style={styles.buttonWrapper}
//       >
//         <LinearGradient
//           colors={['#29a19c', '#8be9e9']}
//           start={{ x: 0, y: 0 }}
//           end={{ x: 1, y: 0 }}
//           style={styles.button}
//         >
//           <Text style={styles.buttonText}>{role.label}</Text>
//           <Image source={role.img} style={styles.buttonImage} resizeMode="contain" />
//         </LinearGradient>
//       </TouchableOpacity>
//     ))}

//     {/* Ảnh nền giống Intro nếu cần */}
//     <Image
//       source={require('../assets/intro-illustration.png')}
//       style={styles.footerImage}
//       resizeMode="contain"
//     />
//   </View>
//   );
// }

// const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#000',
// //     padding: 24,
// //     justifyContent: 'center',
// //   },
// //   title: {
// //     color: '#fff',
// //     fontSize: 22,
// //     textAlign: 'center',
// //     marginBottom: 40,
// //   },
// //   roleButton: {
// //     flexDirection: 'row',
// //     backgroundColor: 'rgba(41,161,156,0.8)',
// //     paddingVertical: 20,
// //     borderRadius: 30,
// //     marginVertical: 10,
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// //   roleText: {
// //     color: '#fff',
// //     fontSize: 18,
// //     fontWeight: '600',
// //     marginRight: 12,
// //   },
// //   image: {
// //     position: 'absolute',
// //     bottom: 0,
// //     width: '80%',
// //     height: '30%',
// //     alignSelf: 'center',
// //   },
// container: {
//     flex: 1,
//     backgroundColor: '#000',
//     paddingHorizontal: 24,
//     paddingTop: SCREEN_HEIGHT * 0.1,
//     alignItems: 'center',
//   },
//   title: {
//     color: '#fff',
//     fontSize: 22,
//     marginBottom: 30,
//     textAlign: 'center',
//   },
//   buttonWrapper: {
//     width: '100%',
//     marginVertical: 10,
//   },
//   button: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     width: '100%',
//     height: SCREEN_HEIGHT * 0.1,  // khoảng 10% chiều dọc
//     borderRadius: 50,
//     paddingHorizontal: 20,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: '600',
//   },
//   buttonImage: {
//     width: SCREEN_WIDTH * 0.2,  // 20% chiều ngang
//     height: '80%',             // 80% chiều cao của button
//   },
//   footerImage: {
//     position: 'absolute',
//     bottom: 0,
//     width: '80%',
//     height: '30%',
//     alignSelf: 'center',
//   },
// });