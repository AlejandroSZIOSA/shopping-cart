import { View,Text,Pressable,StyleSheet } from "react-native";
import UI_COLORS from "../../../../constants/uiColors";

// Using 'Props' keyword for onPress
//'Props' keyword can not use when I am Using children
function DescriptionBtn({children, onPress}){
return(
  <View style={styles.container}>
    <Pressable
      onPress={onPress}
    >
      <Text style={styles.textStyle}> {children}</Text>
    </Pressable>
  </View>
);

}
export default DescriptionBtn;

const styles= StyleSheet.create({
  container:{
    padding:8,
    margin:15,
    borderRadius:20,
    backgroundColor:UI_COLORS.DESCRIPTION_BTN_BACKGROUND,
  },
  textStyle:{
    color:'white',
    fontSize:18,
  },

})
