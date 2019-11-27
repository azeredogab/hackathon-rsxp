import React, { useState, useEffect } from "react";
import {
  View,
  AsyncStorage,
  KeyboardAvoidingView,
  Platform,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground
} from "react-native";

import bgHome from "../assets/slapsh.jpg";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");

  useEffect(() => {
    AsyncStorage.getItem("user").then(user => {
      if (user) {
        navigation.navigate("List");
      }
    });
  }, []);

  async function handleSubmit() {
    await AsyncStorage.setItem("user", email);
    navigation.navigate("List");
  }

  return (
    <KeyboardAvoidingView
      behavior="padding"
      enabled={Platform.OS === "ios"}
      style={styles.container}>
      <ImageBackground
        resizeMode={'cover'} 
        style={styles.bgLogo}
        source={bgHome}>
        <View style={styles.form}>
          <Text style={styles.label}>Seu email *</Text>
          <TextInput
            style={styles.input}
            placeholder="Seu e-mail"
            placeholderTextColor="#999"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            value={email}
            onChangeText={setEmail}
          />

          <Text style={styles.label}>Senha *</Text>
          <TextInput
            placeholder="Password"
            returnKeyType='go'


            style={styles.input}
            secureTextEntry={true}
            placeholderTextColor="#999"
            autoCorrect={false}
          />

          <TouchableOpacity onPress={handleSubmit} style={styles.button}>
            <Text style={styles.buttonText}>Encontrar mentores</Text>
          </TouchableOpacity>
        </View>  
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgLogo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  form: {
    alignSelf: "stretch",
    paddingHorizontal: 30,
    margin: 30,
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 10,
    opacity: 0.9,
  },
  label: {
    fontWeight: "bold",
    color: "#444",
    marginBottom: 8
  },
  input: {
    borderWidth: 1,
    borderColor: "#DDD",
    paddingHorizontal: 20,
    fontSize: 16,
    color: "#444",
    height: 44,
    marginBottom: 20,
    borderRadius: 2,
    backgroundColor: '#FFF'
  },
  button: {
    height: 42,
    backgroundColor: "#C000B9",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16
  }
});
