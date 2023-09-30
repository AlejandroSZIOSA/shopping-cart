import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';

import UI_COLORS from './src/constants/uiColors';

import { ProductListStackScreens } from './src/navigation/stacks/ProductListStackScreens';


export default function App () {
  return (
    /* Fragment: Fixed problem with Navigation Stack */
    <>
      <StatusBar style='dark' />
      <ProductListStackScreens/>
    </>
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

