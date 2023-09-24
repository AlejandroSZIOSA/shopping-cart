import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import ShoppingScreen from './src/screens/ShoppingScreen';
import ShoppingCartScreen from './src/screens/ShoppingCartScreen';

import UI_COLORS from './src/constants/uiColors';

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
    backgroundColor: UI_COLORS.APP_BACKGROUND,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

