import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="user-selection" options={{ headerShown: false }} />
        {/* <Stack.Screen name="doctor-login" options={{ headerShown: false }} />
        <Stack.Screen name="patient-login" options={{ headerShown: false }} />
        <Stack.Screen name="admin-login" options={{ headerShown: false }} />
        <Stack.Screen name="doctor-home" options={{ headerShown: false }} />
        <Stack.Screen name="patient-home" options={{ headerShown: false }} />
        <Stack.Screen name="admin-home" options={{ headerShown: false }} />
        <Stack.Screen name="doctor-profile" options={{ headerShown: false }} />
        <Stack.Screen name="patient-profile" options={{ headerShown: false }} />
        <Stack.Screen name="admin-profile" options={{ headerShown: false }} />
        <Stack.Screen name="doctor-appointment" options={{ headerShown: false }} />
        <Stack.Screen name="patient-appointment" options={{ headerShown: false }} />
        <Stack.Screen name="doctor-chat" options={{ headerShown: false }} />
        <Stack.Screen name="patient-chat" options={{ headerShown: false }} />
        <Stack.Screen name="doctor-history" options={{ headerShown: false }} />
        <Stack.Screen name="patient-history" options={{ headerShown: false }} />
        <Stack.Screen name="doctor-settings" options={{ headerShown: false }} />
        <Stack.Screen name="patient-settings" options={{ headerShown: false }} />
        <Stack.Screen name="admin-settings" options={{ headerShown: false }} />
        <Stack.Screen name="doctor-notification" options={{ headerShown: false }} />
        <Stack.Screen name="patient-notification" options={{ headerShown: false }} />
        <Stack.Screen name="admin-notification" options={{ headerShown: false }} />
        <Stack.Screen name="doctor-appointment-detail" options={{ headerShown: false }} />
        <Stack.Screen name="patient-appointment-detail" options={{ headerShown: false }} />
        <Stack.Screen name="doctor-chat-detail" options={{ headerShown: false }} />
        <Stack.Screen name="patient-chat-detail" options={{ headerShown: false }} />
        <Stack.Screen name="doctor-history-detail" options={{ headerShown: false }} />
        <Stack.Screen name="patient-history-detail" options={{ headerShown: false }} />
        <Stack.Screen name="doctor-settings-detail" options={{ headerShown: false }} />
        <Stack.Screen name="patient-settings-detail" options={{ headerShown: false }} />
        <Stack.Screen name="admin-settings-detail" options={{ headerShown: false }} />
        <Stack.Screen name="doctor-notification-detail" options={{ headerShown: false }} />
        <Stack.Screen name="patient-notification-detail" options={{ headerShown: false }} />
        <Stack.Screen name="admin-notification-detail" options={{ headerShown: false }} />
        <Stack.Screen name="doctor-appointment-create" options={{ headerShown: false }} />
        <Stack.Screen name="patient-appointment-create" options={{ headerShown: false }} />
        <Stack.Screen name="doctor-chat-create" options={{ headerShown: false }} />
        <Stack.Screen name="patient-chat-create" options={{ headerShown: false }} />
        <Stack.Screen name="doctor-history-create" options={{ headerShown: false }} />
        <Stack.Screen name="patient-history-create" options={{ headerShown: false }} />
        <Stack.Screen name="doctor-settings-create" options={{ headerShown: false }} />
        <Stack.Screen name="patient-settings-create" options={{ headerShown: false }} />
        <Stack.Screen name="admin-settings-create" options={{ headerShown: false }} />
        <Stack.Screen name="doctor-notification-create" options={{ headerShown: false }} />
        <Stack.Screen name="patient-notification-create" options={{ headerShown: false }} />
        <Stack.Screen name="admin-notification-create" options={{ headerShown: false }} />
        <Stack.Screen name="doctor-appointment-edit" options={{ headerShown: false }} />
        <Stack.Screen name="patient-appointment-edit" options={{ headerShown: false }} />
        <Stack.Screen name="doctor-chat-edit" options={{ headerShown: false }} />
        <Stack.Screen name="patient-chat-edit" options={{ headerShown: false }} />
        <Stack.Screen name="doctor-history-edit" options={{ headerShown: false }} />
        <Stack.Screen name="patient-history-edit" options={{ headerShown: false }} />
        <Stack.Screen name="doctor-settings-edit" options={{ headerShown: false }} />
        <Stack.Screen name="patient-settings-edit" options={{ headerShown: false }} />
        <Stack.Screen name="admin-settings-edit" options={{ headerShown: false }} />
        <Stack.Screen name="doctor-notification-edit" options={{ headerShown: false }} />
        <Stack.Screen name="patient-notification-edit" options={{ headerShown: false }} />
        <Stack.Screen name="admin-notification-edit" options={{ headerShown: false }} />
        <Stack.Screen name="doctor-appointment-delete" options={{ headerShown: false }} />
        <Stack.Screen name="patient-appointment-delete" options={{ headerShown: false }} />
        <Stack.Screen name="doctor-chat-delete" options={{ headerShown: false }} />
        <Stack.Screen name="patient-chat-delete" options={{ headerShown: false }} />
        <Stack.Screen name="doctor-history-delete" options={{ headerShown: false }} />
        <Stack.Screen name="patient-history-delete" options={{ headerShown: false }} />
        <Stack.Screen name="doctor-settings-delete" options={{ headerShown: false }} />
        <Stack.Screen name="patient-settings-delete" options={{ headerShown: false }} />
        <Stack.Screen name="admin-settings-delete" options={{ headerShown: false }} />
        <Stack.Screen name="doctor-notification-delete" options={{ headerShown: false }} />
        <Stack.Screen name="patient-notification-delete" options={{ headerShown: false }} />
        <Stack.Screen name="admin-notification-delete" options={{ headerShown: false }} />
        <Stack.Screen name="doctor-appointment-history" options={{ headerShown: false }} />
        <Stack.Screen name="patient-appointment-history" options={{ headerShown: false }} />
        <Stack.Screen name="doctor-chat-history" options={{ headerShown: false }} />
        <Stack.Screen name="patient-chat-history" options={{ headerShown: false }} />
        <Stack.Screen name="doctor-history-history" options={{ headerShown: false }} />
        <Stack.Screen name="patient-history-history" options={{ headerShown: false }} />
        <Stack.Screen name="doctor-settings-history" options={{ headerShown: false }} />
        <Stack.Screen name="patient-settings-history" options={{ headerShown: false }} />
        <Stack.Screen name="admin-settings-history" options={{ headerShown: false }} />
        <Stack.Screen name="doctor-notification-history" options={{ headerShown: false }} />
        <Stack.Screen name="patient-notification-history" options={{ headerShown: false }} />
        <Stack.Screen name="admin-notification-history" options={{ headerShown: false }} />
        <Stack.Screen name="doctor-appointment-history-detail" options={{ headerShown: false }} />
        <Stack.Screen name="patient-appointment-history-detail" options={{ headerShown: false }} />
        <Stack.Screen name="doctor-chat-history-detail" options={{ headerShown: false }} />
        <Stack.Screen name="patient-chat-history-detail" options={{ headerShown: false }} />
        <Stack.Screen name="doctor-history-history-detail" options={{ headerShown: false }} />
        <Stack.Screen name="patient-history-history-detail" options={{ headerShown: false }} />
        <Stack.Screen name="doctor-settings-history-detail" options={{ headerShown: false }} />
        <Stack.Screen name="patient-settings-history-detail" options={{ headerShown: false }} />
        <Stack.Screen name="admin-settings-history-detail" options={{ headerShown: false }} />
        <Stack.Screen name="doctor-notification-history-detail" options={{ headerShown: false }} />
        <Stack.Screen name="patient-notification-history-detail" options={{ headerShown: false }} />
        <Stack.Screen name="admin-notification-history-detail" options={{ headerShown: false }} />
        <Stack.Screen name="doctor-appointment-history-create" options={{ headerShown: false }} />
        <Stack.Screen name="patient-appointment-history-create" options={{ headerShown: false }} />
        <Stack.Screen name="doctor-chat-history-create" options={{ headerShown: false }} />
        <Stack.Screen name="patient-chat-history-create" options={{ headerShown: false }} />   */}
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="light" />
    </>
  );
}
