import { Pressable, StyleSheet, View,Text } from "react-native";
import UI_COLORS from "../../../../constants/uiColors";

function BuyBtn({children,onPress}){
  return(
    <View style={styles.container}>
      <Pressable
        onPress={onPress}
      >
        <Text style={styles.textStyle}> {children} </Text>  
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
    backgroundColor: UI_COLORS.BUY_BTN_BACKGROUND,
  },
  textStyle:{
    color:'white',
    fontSize:18,
  },
}) 
