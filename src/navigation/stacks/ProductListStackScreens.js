import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import ProductsScreen from '../../screens/ProductsScreen';

const ProductDescriptionStack = createStackNavigator();

export const ProductListStackScreens =() => (  
  <NavigationContainer>
    <ProductDescriptionStack.Navigator>

      <ProductDescriptionStack.Screen 
        name= "ProductList"   
        component={ProductsScreen}
      />

    </ProductDescriptionStack.Navigator>
  </NavigationContainer>
)
