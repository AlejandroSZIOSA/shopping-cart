import { View,Text,StyleSheet } from "react-native";

function ShoppingCartScreen(){
  return(
    <View>
      <Text style={styles.text}> Shopping Cart screen</Text>
    </View>
  )
}
export default ShoppingCartScreen;

const styles = StyleSheet.create({
  text:{
    color:'black',
    fontSize:16,
  }
})