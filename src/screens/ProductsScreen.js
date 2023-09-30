import { View,StyleSheet,Text, FlatList,SafeAreaView,Platform } from "react-native";
import { PRODUCTS } from "../data/dummy-data";
import ProductRowTile from "../components/cardviews/product-item/ProductRowTile";
import UI_COLORS from "../constants/uiColors";


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

function ProductsScreen(){
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
export default ProductsScreen;

const styles = StyleSheet.create({
  containerSafeAreas: {
    flex: 1,
  },
  textContainer: {
    backgroundColor:UI_COLORS.PRODUCT_LIST_HEADER_BACKGROUND,
    padding:10,
    marginTop:Platform.select({ios:0,android:40}), //Using Platform API
    marginBottom:10,
  },

  text: {
    textAlign: 'center',
    color: 'white',
    fontSize:18,
  }

})