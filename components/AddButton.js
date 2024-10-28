import React from "react";
import { SafeAreaView, TouchableOpacity, Text, StyleSheet, View} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';



function AddButton( {onAddCard, onPress}){
    return(
        <SafeAreaView>
        <View  style ={styles.ButtonStyle}>
          <TouchableOpacity onPress={() => { onAddCard(); onPress(); }}>
            <Text style = {styles.ButtonText} >Add
             <Icon name = "add" size = {19} color = "black"/>
            </Text>
           
          </TouchableOpacity>

        </View>

        </SafeAreaView>


    );

}

const styles = StyleSheet.create({
    ButtonStyle : {
        backgroundColor: 'rgba(1, 59, 25, 0.62)',
        borderRadius: 20, 
        fontSize : 25,
        borderWidth: 3,
        borderColor: 'black',
        padding: 5, 
       // paddingLeft: 33,
        // margin: 140,
        marginTop:280,
        marginLeft: 295,
        marginRight: 70,
        alignItems: "center",
        justifyContent:"center",

    },

    ButtonText :{
      fontSize: 22,
      //fontFamily: 'Montaga',
    },
});

export default AddButton;