import { StyleSheet, View,Text } from "react-native";
import { PRODUCTS } from "../data/dummy-data";

function DescriptionScreen(){
  return (
    <View style={styles.container}> 
      <Text> Description Screen </Text>
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