import React, {useState} from "react";
import { SafeAreaView, Text, TextInput, Button, StyleSheet, View, Touchable,TouchableOpacity, Image} from "react-native";
import { ActivityIndicator } from "react-native-web";
import { FIREBASE_AUTH } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';



const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState('');
    const auth = FIREBASE_AUTH;

    const signIn = async () => {
        setLoading(true);
        try{
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response);
            props.navigation.navigate("HomeScreen");
        }catch(error){
            console.log(error);
            alert('Sign in failed: '+ error.message);
        }finally{
            setLoading(false);
        }
    }

    const signUp = async () => {
        props.navigation.navigate("CreateAccount");
        // setLoading(true);
        // try{
        //     const response = await createUserWithEmailAndPassword(auth, email, password);
        //     console.log(response);
        //     alert('Check your emails!!');
        // }catch(error){
        //     console.log(error);
        //     alert('Sign in failed: '+ error.message);
        // }finally{
        //     setLoading(false);
        // }
    }
    const GoogleSignIn = async () => {
        try {
          // Google Authentication sağlayıcısını oluşturun
          const provider = new GoogleAuthProvider();
    
          // Google hesabıyla oturum açma penceresini açın ve sonucu alın
          const result = await signInWithPopup(auth, provider);
    
          // Oturum açma başarılıysa, sonucun kullanıcı bilgilerini alın
          const user = result.user;
    
          // Kullanıcı bilgilerini konsola yazdırın
          console.log("Google Authentication Success:", user);
    
          // Giriş yapıldıktan sonra bir sonraki sayfaya yönlendirin (örneğin, 'Dashboard')
          props.navigation.navigate('HomeScreen');
        } catch (error) {
          // Hata oluşursa, hatayı konsola yazdırın ve kullanıcıya bildirin
          console.error("Google Authentication Failed:", error);
          alert("Google Authentication Failed: " + error.message);
        }
      };
   
    return(

        <SafeAreaView style = {styles.Container}>
            <Image
                source = {require('../assets/tripp.png')}
            />

            <Text style = {styles.textStyle}>TripMemoir</Text>

           
               
            <TextInput value = {email} style = {styles.buttonStyle} placeholder = "email" autoCapitalize = "none" onChangeText = {(text) => setEmail(text)}></TextInput>
        
            <TextInput secureTextEntry = {true} value = {password} style = {styles.buttonStyle} placeholder = "password" autoCapitalize = "none" onChangeText = {(text) => setPassword(text)}></TextInput>
            
                {/* <TouchableOpacity style={styles.buttonStyle} onPress = {() => props.navigation.navigate('HomeScreen')}> */}
                {/* <a> sign in</a> </TouchableOpacity>*/}

                {loading ? (
                    <ActivityIndicator size = "large" color = "pink" />
                ) : (
                    <>
                    {/* <Button title = "Login" onPress = {signIn}/>
                    <TouchableOpacity onPress={signUp}>
                        <Text>CreateAccount</Text>
                    </TouchableOpacity> */}

                   
                    <View  style ={styles.LoginButton}>
                        <TouchableOpacity onPress= {signIn}>
                            <Text >LOGIN  </Text>
                        </TouchableOpacity>
                        
                    </View>
                    <View  style ={styles.LoginButton}>
                        <TouchableOpacity onPress= {GoogleSignIn}>
                            <Text >SIGN IN WITH GOOGLE  </Text>
                        </TouchableOpacity>
                        
                    </View>
                    
                    </>
                ) }
                <Text style = {styles.forgotStyle}><TouchableOpacity onPress={() => props.navigation.navigate("forgetPassword")}>Forgot Password</TouchableOpacity></Text>

                <Text >Don't have an account?<TouchableOpacity onPress={signUp}>Create an account.</TouchableOpacity> </Text>

           
           
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    buttonStyle: {
        // Define your custom styles for the button here
        backgroundColor: 'rgba(217, 217, 217, 1)', // Example background color
        color: 'rgba(89, 78, 78, 1)', 
        borderRadius: 10, // Example border radius
        borderColor: 'rgba(89, 78, 78, 1)',
        borderWidth:2,
        padding: 10, // Example padding
        margin: 10, // Example margin top
        borderRadius: 10,
        paddingLeft: 30,
        
    },

    imageStyle:{
        
    },
    Container: {
        backgroundColor: 'rgba(15, 152, 70, 0.35)',
        flex: 1,
        alignItems : 'center',
        justifyContent: 'center',
    },

    textStyle: {
        fontFamily: "informal roman",
        fontSize: 55,
        fontWeight: 13,
        justifyContent: 'center',
        alignContent:'center',
       marginTop: 50,
    
    },

    LoginButton: {
        backgroundColor: 'rgba(1, 59, 25, 0.62)',
        borderRadius: 20, 
        fontSize : 25,
        borderWidth: 3,
        borderColor: 'black',
        padding: 3, 
        width: 240,
        height: 40,
        justifyContent: 'center',
        alignItems :'center',
        marginTop: 20,
        
    },
    Text: {
        
        fontSize: 15,
        justifyContent: 'center',
        alignContent:'center',
   
      
    },
    forgotStyle:{
        marginBottom: 20,
        fontSize:15,

        
    },
    icon: {
        marginBottom: 20, // Simgeyi metinden biraz aşağıda göstermek için bir boşluk ekleyin
       
        marginRight: 170,
      },
});
export default Login;


