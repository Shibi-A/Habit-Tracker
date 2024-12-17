import { Tabs } from "expo-router";

export default function MainScreenLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="Home" options={{ headerShown: false}} />
      <Tabs.Screen name="Calendar" options={{ headerShown: false }} />
      <Tabs.Screen name="Progress" options={{ headerShown: false }} />
    </Tabs>
  );
}