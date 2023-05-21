import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Home } from './src/screens';

export default function App() {
  return (
    <>
      <StatusBar barStyle='dark-content' />
      <SafeAreaView style={styles.container}>
        <Home />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
