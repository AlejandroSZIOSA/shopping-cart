import { View,Text,StyleSheet } from "react-native";
// Props keyword helps :)
function ProductRowTile(props) {
  //console.log(props);
  return(
    <View>
      <Text> {props.name} </Text>
      <Text> {props.price} </Text>
    </View>
  );

}
export default ProductRowTile;

