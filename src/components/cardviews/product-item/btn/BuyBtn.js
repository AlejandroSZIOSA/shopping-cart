import { Pressable, StyleSheet, View,Text } from "react-native";

function BuyBtn(){
  return(
    <View style={styles.container}>
      <Pressable>
        <Text style={styles.textStyle}> Buy </Text>  
      </Pressable>
    </View>

  )
}
export default BuyBtn;

const styles= StyleSheet.create({
  container:{
    padding:8,
    //margin:10,
    borderRadius:10,
    backgroundColor: "green",
  },
  textStyle:{
    color:'white',
    fontSize:18,
  },
}) 
