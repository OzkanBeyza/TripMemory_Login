import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { FIREBASE_AUTH } from "../firebase";
import resetPassword from "firebase/auth";



const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleResetPassword = async () => {
    try {
      await resetPassword(email);
      alert('Şifre Sıfırlama E-postası Gönderildi');
    } catch (error) {
      alert('Hata', error.message);
    }
  };

  return (
    <View>
      <TextInput placeholder="E-posta Adresi" onChangeText={setEmail} value={email} keyboardType="email-address" />
      <Button title="Şifremi Sıfırla" onPress={handleResetPassword} />
    </View>
  );
};

export default ForgotPassword;
