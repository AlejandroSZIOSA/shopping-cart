import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import ShoppingScreen from './src/screens/ShoppingScreen';

//import { ProductDescriptionStack } from './src/navigation/stacks/ProductDescriptionStack';

import { NavigationContainer } from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack'

import UI_COLORS from './src/constants/uiColors';

import DescriptionScreen from './src/screens/DescriptionScreen';
import { ProductListStackScreens } from './src/navigation/stacks/ProductListStackScreens';





// file structure 2
export default function App() {
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

