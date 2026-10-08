// @ts-ignore
import "./global.css";

import { View, ActivityIndicator } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { useCachedResources } from "./src/hooks/useCachedResources";
import AppNavigator from "./src/navigation/Appnavigator";

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "red",
        }}
      >
        <ActivityIndicator size="large" color="#3b82f6" />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <View style={{ flex: 1, backgroundColor: "red" }}>
        <AppNavigator />
      </View>
    </SafeAreaProvider>
  );
}