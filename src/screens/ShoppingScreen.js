import { View,StyleSheet,Text } from "react-native";

function ShoppingScreen(){
  return(
    <View>
      <Text style={styles.text}> Shopping Screen </Text>
    </View>
  );
}
export default ShoppingScreen;

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize:18,
  }

})