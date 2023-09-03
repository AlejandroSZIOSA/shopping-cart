import { View,Text,StyleSheet } from "react-native";

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

