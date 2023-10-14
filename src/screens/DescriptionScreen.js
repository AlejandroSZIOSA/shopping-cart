import { StyleSheet, View,Text,SafeAreaView } from "react-native";
import { PRODUCTS } from "../data/dummy-data";
import UI_COLORS from "../constants/uiColors";

// Can use "route" and "navigation" params because is register in a navigation-stack
function DescriptionScreen({route}){
  const productId = route.params.productId;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}> 
        <Text style={styles.titleText}> Description SC</Text>
      </View>

      <View style={styles.resultContainer}> 
        <Text style={styles.resultText}> Object ID = {productId}</Text>
      </View>

    </SafeAreaView>
  )

}
export default DescriptionScreen;

const styles = StyleSheet.create({

  container:{
    flex:1,
    alignContent:'center',
    justifyContent:'center',
    backgroundColor: UI_COLORS.DESCRIPTION_BTN_BACKGROUND,
  },

  titleContainer:{
    padding: 20,

  },

  titleText:{
    textAlign: 'center',
    fontSize: 40,
  },

  resultContainer:{
    padding: 20,
  },

  resultText:{
    textAlign: 'center',
    fontSize: 40,
  },




});