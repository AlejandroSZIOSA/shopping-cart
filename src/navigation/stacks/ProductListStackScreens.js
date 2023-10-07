import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import ProductsScreen from '../../screens/ProductsScreen';
import DescriptionScreen from '../../screens/DescriptionScreen';

//Create an Obj type Navigation-Stack
const ProductDescriptionStack = createStackNavigator();

export const ProductListStackScreens =() => (  
  <NavigationContainer>
    <ProductDescriptionStack.Navigator
    screenOptions={{
      headerStyle:{backgroundColor:'grey'},
      headerTitleStyle:{
        fontSize: 25,
      },
      contentStyle:{ backgroundColor:'black'},
    }}
    >

      <ProductDescriptionStack.Screen name= "Product List"   component={ProductsScreen}/>

      {/* register Description Screen to Navigation */}
      <ProductDescriptionStack.Screen name= "ProductDescription"  component={DescriptionScreen}/>


    </ProductDescriptionStack.Navigator>
  </NavigationContainer>
)
