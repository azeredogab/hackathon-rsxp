import React, { useState, useEffect } from "react";

import {
  SafeAreaView,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  AsyncStorage,
  View,
  TouchableOpacity
} from "react-native";

import MentorList from "../components/MentorsLists";
import logo from "../assets/logo.png";

export default function List({ navigation }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem("user").then(storagedUsers => {
      setUsers(storagedUsers);
    });
  }, []);

  async function handleLogout() {
    await AsyncStorage.removeItem('user');
    navigation.navigate("Login");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image style={styles.logo} source={logo} />
        <TouchableOpacity style={styles.buttonLogout} onPress={handleLogout}>
          <Text style={styles.textButton}>X SAIR</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        <Text>Bem vindo {users}</Text>
        <MentorList />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  logo: {
    height: 32,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: 10
  },
  buttonLogout: {
    alignSelf: "flex-end",
    textAlignVertical: "top",
    position: "absolute",
    top: 20,
    right: 20,
  },
  textButton: {
    color: "#C000B9",
    fontWeight: "bold",
    fontSize: 12,
  },
  title: {
    fontSize: 22,
    color: "#444",
    paddingHorizontal: 20,
    marginTop: 30
  }
});

