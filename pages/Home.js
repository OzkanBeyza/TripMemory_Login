import React, {useState} from "react";
import { SafeAreaView, Text,FlatList, TextInput, StyleSheet,View} from "react-native";
import AddButton from "../components/AddButton";
import Card from "../components/Card";

 
const Home = ({ navigation }) => {
  const [cards, setCards] = useState([]);
  const [inputText, setInputText] = useState("");
  const [isInputVisible, setIsInputVisible] = useState(false);

  const handleAddCard = () => {
    if (inputText.trim() !== "") {
      setCards([...cards, inputText]);
      setInputText("");
      setIsInputVisible(false);
    }
  };
  const handleAddButtonPress = () => {
    setIsInputVisible(true); // Butona tıklandığında inputu göster
    navigation.navigate("Details");
  };

  return (
    <SafeAreaView style = {styles.container}>
      <Text style = {styles.Cities}>City</Text>
         
         {isInputVisible && (
           <TextInput
        style={styles.input}
        placeholder="Add"
        onChangeText={setInputText}
        value={inputText}
      />
     )}
     
        <FlatList
        data={cards}
        renderItem={({ item }) => <Card text={item} />}
        keyExtractor={(item, index) => index.toString()}
      /> 
       <AddButton onAddCard={handleAddCard} onPress= {handleAddButtonPress} />
    </SafeAreaView>
  );
};




const styles = StyleSheet.create({
Cities : {
    fontFamily: "informal roman",
    fontSize: 48,
    fontWeight: 13,
    paddingLeft :40,
    alignItems: "center",
    justifyContent: "center",

},
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    ButtonStyle: {
      backgroundColor: 'rgba(1, 59, 25, 0.62)',
      borderRadius: 20,
      fontSize: 25,
      borderWidth: 3,
      borderColor: 'black',
      padding: 5,
      marginTop: 180,
      marginLeft: 295,
      marginRight: 70,
      alignItems: "center",
      justifyContent: "center",
    },
    ButtonText: {
      fontSize: 22,
    },
    CardStyle: {
      backgroundColor: 'rgba(15, 152, 70, 0.35)',
      height: 50,
      borderRadius: 15,
      borderColor: "black",
      borderWidth: 2,
      marginTop: 20,
      marginLeft: 50,
      marginRight: 80,
      alignItems: 'center',
      justifyContent: 'center',
    },
    // input: {
    //   backgroundColor: 'rgba(1, 59, 25, 0.62)',
    //   height: 40,
    //   width: 40,
    //  // borderColor: 'gray',
    //   borderWidth: 1,
    //   marginBottom: 10,
    //   paddingHorizontal: 10,
    //   marginTop:280,
    //   marginLeft: 295,
    //   marginRight: 70,
    //   alignItems: "center",
    //   justifyContent:"center",
    
    //   borderRadius: 20,
    //   fontSize: 25,
    //   borderWidth: 3,
    //   borderColor: 'black',
    // },
    input: {
      height : 50,
      width:300,
      marginBottom: 10,
      paddingHorizontal: 10,
      backgroundColor : 'rgba(15, 152, 70, 0.35)',
      borderRadius: 15,
      borderColor: "black",
      borderWidth : 2,
      marginTop: 10,
      marginLeft: 50,
      marginRight: 80,
    // paddingLeft : 60,
      alignItems : 'center',
      justifyContent: 'center',
      },
  });
  




export default Home;
