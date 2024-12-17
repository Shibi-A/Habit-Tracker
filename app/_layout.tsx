import { Stack } from "expo-router";
import {Tabs} from "expo-router"
export default function RootLayout() {
  return (
  
  <Stack>
  <Stack.Screen name="index" options={{ headerShown: false }} />;
  <Stack.Screen name="/screens/LoginScreen" options={{ headerShown: false }} />;
  <Stack.Screen name="/screens/RegistrationScreen" options={{ headerShown: false }} />;
  <Stack.Screen name="/screens/MainScreens/Home" options={{ headerShown: false }} />;
  <Stack.Screen name="/screens/MainScreens/Progress" options={{ headerShown: false }} />;
  <Stack.Screen name="/screens/MainScreens/Calendar" options={{ headerShown: false }} />;
  <Stack.Screen name="/screens/NewHabit" options={{ headerShown: false }} />;
  </Stack>
  
 /*<Tabs>
  <Tabs.Screen name="index" options={{ title: "Home" }} />
  <Tabs.Screen name="LoginScreen" options={{ title: "Llogin" }} />
  <Tabs.Screen name="RegistrationScreen" options={{ title: "Registration" }} />

 </Tabs>*/
  )
}
