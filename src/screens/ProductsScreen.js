import { StyleSheet, FlatList,SafeAreaView } from "react-native";
import { PRODUCTS } from "../data/dummy-data";
import ProductRowTile from "../components/cardviews/product-item/ProductRowTile";

//Destructive
function ProductsScreen({navigation}){
    //Function renders a product item and takes PRODUCTS data as a parameter :)
    function renderProductItem (itemData) {
      
      // Navigate between Stacks SC
      function pressHandler(){
        navigation.navigate('Description');
      }

      return (
        <ProductRowTile 
          name={itemData.item.name} 
          price={itemData.item.price}
          onPress={pressHandler}
        />
      )
    }

  return( 
    <SafeAreaView style={styles.containerSafeAreas}>
    
      <FlatList
        data={PRODUCTS}
        keyExtractor={(item) => item.id}
        renderItem={renderProductItem}
        numColumns={0} // can change this to 2 :)
      />
        
    </SafeAreaView>
  );
}
export default ProductsScreen;

const styles = StyleSheet.create({

  containerSafeAreas: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor:'yellow',
    alignItems: 'center',
  },

  /* textContainer: {
    backgroundColor:UI_COLORS.PRODUCT_LIST_HEADER_BACKGROUND,
    padding:10,
    marginTop:Platform.select({ios:0,android:40}), //Using Platform API
    marginBottom:10,
  }, */

  text: {
    textAlign: 'center',
    color: 'white',
    fontSize:18,
  }

})