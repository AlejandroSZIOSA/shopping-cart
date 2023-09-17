import { View,Text,Pressable,StyleSheet } from "react-native";
// Using 'Props' keyword for onPress
function DescriptionBtn(props){
return(
  <View style={styles.container}>
    <Pressable
      onPress={props.onPress}
    >
      <Text style={styles.textStyle}> Description</Text>
    </Pressable>
  </View>
);

}
export default DescriptionBtn;

const styles= StyleSheet.create({
  container:{
    padding:10,
    margin:20,
    borderRadius:20,
    backgroundColor:'black',
  },
  textStyle:{
    color:'white',
    fontSize:18,
  },

})
