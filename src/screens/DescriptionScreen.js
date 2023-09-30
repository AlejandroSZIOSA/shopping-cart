import { StyleSheet, View } from "react-native";
function DescriptionScreen(){
  return (
    <View style={styles.container}> 
      <Text> Description Screen </Text>
    </View>
  )

}
export default DescriptionScreen;

const styles = StyleSheet.create({

  container:{
    flex:1,
    alignContent:'center',
  }

});