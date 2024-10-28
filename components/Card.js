import React from "react";
import { SafeAreaView, TouchableOpacity, Text, StyleSheet, View} from "react-native";

function Card({text}){
  return(
    <SafeAreaView>
    <View style = {styles.CardStyle}>
      {/* <TouchableOpacity onPress={() => null}> */}
       {/* <Text>Gaziantep</Text>  */}
      <Text>{text}</Text>
       {/* </TouchableOpacity> */}
      </View>
     
    </SafeAreaView>


  );
}

const styles = StyleSheet.create({
  CardStyle : {
    backgroundColor : 'rgba(15, 152, 70, 0.35)',
    height : 50,
    width:300,
    borderRadius: 15,
    borderColor: "black",
    borderWidth : 2,
    marginTop: 10,
    marginLeft: 50,
    marginRight: 80,
   // paddingLeft : 60,
    alignItems : 'center',
    justifyContent: 'center',




  }

});

export default Card;
