import { View,StyleSheet,Text, FlatList,SafeAreaView } from "react-native";
import { PRODUCTS } from "../data/dummy-data";
import ProductRowTile from "../components/ProductRowTile";

//Function renders a product item and takes PRODUCTS data as a parameter :)
function renderProductItem(itemData){
  //console.log(itemData.)
  return (
    <ProductRowTile 
      name={itemData.item.name} 
      price={itemData.item.price}
    />
  )
}

function ShoppingScreen(){
  return( 
    <SafeAreaView style={styles.containerSafeAreas}>
      <View>
        <View style ={styles.textContainer}>
          <Text style={styles.text}> Product List </Text>
        </View>
        <View>
          <FlatList
            data={PRODUCTS}
            keyExtractor={(item) => item.id}
            renderItem={renderProductItem}
            numColumns={0} // can change this to 2 :)
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
export default ShoppingScreen;

const styles = StyleSheet.create({
  containerSafeAreas: {
    flex: 1,
  },

  textContainer: {
    backgroundColor:'red',
    padding:10,
    marginTop:30,
    marginBottom:10,
  },

  text: {
    textAlign: 'center',
    color: 'black',
    fontSize:18,
  }

})