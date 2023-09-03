import { View,StyleSheet,Text, FlatList } from "react-native";
import { PRODUCTS } from "../data/dummy-data";
import ProductRowTile from "../components/ProductRowTile";

//Function renders a product item
function renderCategoryItem(itemData){
  return (
    <ProductRowTile 
      title={itemData.item.name} 
      //price={itemData.item.price}
    />
  )
}

function ShoppingScreen(){
  return(
    <View>
      <Text style={styles.text}> Shopping Screen </Text>
        
          <FlatList
            data={PRODUCTS}
            keyExtractor={(item) => { item.id}}
            renderItem={renderCategoryItem}
            //numColumns={2} // can change this :)
          />
        
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