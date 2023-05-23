import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Home } from './src/screens';
import MainNavigator from './src/navigation/MainNavigator';

export default function App() {
  return (
    <>
      <StatusBar barStyle='light-content' />
      <SafeAreaView style={styles.container}>
        <MainNavigator />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
