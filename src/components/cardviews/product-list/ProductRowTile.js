import { View,Text,StyleSheet, Button} from "react-native";
// Props keyword helps :)
function ProductRowTile(props) {
  //console.log(props);
  return(
    <View style={styles.rowItem}>
      <View>
        <Text> {props.name} </Text>
      </View>
      <View>
        <Text> {props.price} </Text>
      </View>
      <View>
        <Button title='Description'/>
      </View>
      <View>
        <Button title='To Cart'/>
      </View>
    </View>
  );

}
export default ProductRowTile;

const styles = StyleSheet.create({
  rowItem:{
    //flex: 1,
    margin:5,
    height:200,
    width:350,
    borderRadius:10,
    backgroundColor:'blue'
    }

});
