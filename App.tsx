// @ts-ignore
import "./global.css";

import { View, ActivityIndicator, StyleSheet, Platform } from "react-native";
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
          backgroundColor: "#EEF2F7",
        }}
      >
        <ActivityIndicator size="large" color="#3b82f6" />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <View style={styles.root}>
        <View style={styles.screen}>
          <AppNavigator />
        </View>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#EEF2F7',
  },
  screen: {
    flex: 1,
    width: '100%',
    maxWidth: Platform.OS === 'web' ? 390 : undefined,
    overflow: 'hidden',
  },
});
