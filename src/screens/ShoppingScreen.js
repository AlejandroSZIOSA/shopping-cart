import { View,StyleSheet,Text, FlatList } from "react-native";
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
          <FlatList
            data={PRODUCTS}
            keyExtractor={(item) => item.id}
            renderItem={renderProductItem}
            numColumns={0} // can change this to 2 :)
          />
  );
}
export default ShoppingScreen;

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize:18,
  }

})