import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import ShoppingScreen from '../../screens/ShoppingScreen';

const DescriptionStack = createStackNavigator();

export const ProductListStackScreens =() => (  
  <NavigationContainer>
    <DescriptionStack.Navigator>

      <DescriptionStack.Screen 
        name= "ProductList"   
        component={ShoppingScreen}
      />

    </DescriptionStack.Navigator>
  </NavigationContainer>
)
