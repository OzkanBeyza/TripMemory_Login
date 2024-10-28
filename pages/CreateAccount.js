import React, {useState} from "react";
import { SafeAreaView, Text, StyleSheet, View, TextInput, TouchableOpacity} from "react-native";
import { createUserWithEmailAndPassword} from "firebase/auth";
import { FIREBASE_AUTH } from "../firebase";
import { ActivityIndicator } from "react-native-web";
 


function CreateAccount(props){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const[confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState('');
    const auth = FIREBASE_AUTH;

    const signUp = async () => {
        setLoading(true);
        try{
            if(password !== confirmPassword){
                alert("passwords do not match!");
            }
            const response = await createUserWithEmailAndPassword(auth, email, password);
            
            alert('Check your emails!!');
            props.navigation.navigate("Login");
             
        }catch(error){
            console.log(error);
            alert('Sign in failed: '+ error.message);
        }finally{
            setLoading(false);
        }
    }
    
    return(
        <SafeAreaView style = {styles.container}>
         
            <Text style = {styles.TextStyle}> CREATE YOUR ACCOUNT </Text>
            <View style = {styles.cont}>
                <TextInput value = {email} style = {styles.buttonStyle} placeholder = "email" autoCapitalize = "none" onChangeText = {(text) => setEmail(text)}></TextInput>
            
                <TextInput secureTextEntry = {true} value = {password} style = {styles.buttonStyle} placeholder = "password" autoCapitalize = "none" onChangeText = {(text) => setPassword(text)}></TextInput>
                <TextInput secureTextEntry = {true} value = {confirmPassword} style = {styles.buttonStyle} placeholder = "Confirm password" autoCapitalize = "none" onChangeText = {(text) => setConfirmPassword(text)}></TextInput>
            </View>

                {loading ? (
                    <ActivityIndicator size = "large" color = "pink" />
                ) : (
                    <>
                    {/* <Button title = "Login" onPress = {signIn}/>
                    <TouchableOpacity onPress={signUp}>
                        <Text>CreateAccount</Text>
                    </TouchableOpacity> */}

                   
                    <View  style ={styles.CreateAccountButton}>
                        <TouchableOpacity onPress= {signUp}>
                            <Text style = {styles.text}>Create Account</Text>
                        </TouchableOpacity>
                    </View>
                    
                    </>
                ) }
        
    
        </SafeAreaView>
    );
}


export default CreateAccount;

const styles = StyleSheet.create({

    container:{
        backgroundColor:'rgba(15, 152, 70, 0.35)',
        flex : 1,
        alignItems: 'center',
        justifyContent: 'center',



    },
    TextStyle : {
        fontFamily:'informal roman',
        fontSize: 48,
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 40,

    },
    buttonStyle: {
        // Define your custom styles for the button here
        backgroundColor: 'rgba(217, 217, 217, 1)', // Example background color
        color: 'rgba(89, 78, 78, 1)', 
        borderRadius: 10, // Example border radius
        borderColor: 'rgba(89, 78, 78, 1)',
        borderWidth:2,
        //padding: 10, // Example padding
        margin: 5, // Example margin top
        borderRadius: 10,
        paddingLeft: 30,
        width: 240,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        //marginLeft: 30,
     
    },
    cont: {
        marginBottom:25,
    },
    CreateAccountButton: {
        backgroundColor: 'rgba(1, 59, 25, 0.62)',
        borderRadius: 10, 
        fontSize : 30,
        borderWidth: 3,
        borderColor: 'black',
        //padding: 3, 
        width: 240,
        height: 40,
        justifyContent: 'center',
        alignItems :'center',
        marginTop: 20,
       
        
    },

    text:{
        fontSize: 15,
        justifyContent: 'center',
        alignContent:'center',
   
    }








});