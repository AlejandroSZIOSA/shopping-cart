import { View,Text,StyleSheet, Button} from "react-native";
import DescriptionBtn from "./btn/DescriptionBtn";
import BuyBtn from "./btn/BuyBtn";
// Props keyword helps :)
function ProductRowTile(props) {

  function onPressed() {
    console.log("descriptionBtn")
  }

  return(
    <View style={styles.rowItem}>
      <View style = {styles.productNameContainer}>
        <Text style={styles.productNameText}> {props.name} </Text>
      </View>
      <View style={styles.productPriceContainer}>
        <Text style={styles.productPriceText}> Price =  {props.price} SEK </Text>
      </View>
        {/* Using 'props' onPress keyword */}
        <DescriptionBtn onPress={onPressed}> Description </DescriptionBtn>
      <View>
        <BuyBtn/>
      </View>
    </View>
  );

}
export default ProductRowTile;

const styles = StyleSheet.create({
  rowItem:{
    //flex: 1,
    alignItems: 'center',
    margin:5,
    height:200,
    width:350,
    borderRadius:10,
    backgroundColor:'blue'
    },
    productNameContainer: {
      padding:5,
    },
    productNameText:{
      fontSize:30,
    },
    productPriceContainer: {
      
    },
    productPriceText:{
      fontSize:15,
    },
});
