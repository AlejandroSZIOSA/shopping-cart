import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ShoppingScreen from './src/screens/ShoppingScreen';
import ShoppingCartScreen from './src/screens/ShoppingCartScreen';

// file structure 2
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='dark' />
      <ShoppingCartScreen/>
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
