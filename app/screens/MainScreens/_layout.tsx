import { Tabs } from "expo-router";
import { HabitProvider } from "./HabitContext";

export default function MainScreenLayout() {
  return (
    <HabitProvider>
    <Tabs>
      <Tabs.Screen name="Home" options={{ headerShown: false}} />
      <Tabs.Screen name="CalendarScreen" options={{headerShown: false, title:"Calendar"}} />
      <Tabs.Screen name="Progress" options={{ headerShown: false }} />
    </Tabs>
    </HabitProvider>
  );
}