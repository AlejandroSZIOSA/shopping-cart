import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ShoppingScreen from './src/screens/ShoppingScreen';
// file structure 2
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='dark' />
      <ShoppingScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
