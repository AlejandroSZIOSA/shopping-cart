import { StyleSheet, View,Text } from "react-native";
import { PRODUCTS } from "../data/dummy-data";

// Can use "route" and "navigation" params because is register in a navigation-stack
function DescriptionScreen({route}){
  const productId = route.params.productId;

  return (
    <View style={styles.container}> 
      <Text> Description Screen - {productId} </Text>
    </View>
  )

}
export default DescriptionScreen;

const styles = StyleSheet.create({

  container:{
    flex:1,
    alignContent:'center',
  }

});