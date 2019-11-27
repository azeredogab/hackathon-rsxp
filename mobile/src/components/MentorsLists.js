import React, { useState, useEffect } from "react";
import { withNavigation } from 'react-navigation';

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity
} from "react-native";

import api from "../services/api";
import starts from "../assets/stars.png";

function MentorList({ navigation }) {
  const [mentors, setMentors] = useState([]);

  const img = [
    'https://imagesavatar-static01.italki.com/T051951330_Avatar.jpg',
    'https://imagesavatar-static01.italki.com/1T033448160_Avatar.jpg',
    'https://imagesavatar-static01.italki.com/2T044592680_Avatar.jpg',
    'https://imagesavatar-static01.italki.com/1T045227620_Avatar.jpg',
    'https://imagesavatar-static01.italki.com/T061262840_Avatar.jpg',
    'https://imagesavatar-static01.italki.com/T066781350_Avatar.jpg',
    'https://imagesavatar-static01.italki.com/1T035100177_Avatar.jpg',
    'https://imagesavatar-static01.italki.com/12T046413550_Avatar.jpg',
    'https://imagesavatar-static01.italki.com/10T048016140_Avatar.jpg',
    'https://imagesavatar-static01.italki.com/2T047507310_Avatar.jpg'
  ]

  useEffect(() => {
    async function loadMentors() {
      api
        .get('/mentors')
        .then(({ data }) => {
          setMentors(data.mentors.data);
        })
        .catch(err => console.log(err));
    }

    loadMentors();
  }, []);


  function handleNavigate() {
    navigation.navigate('Detail');
  }

  return (
    <View style={styles.container}>

      <FlatList
        style={styles.list}
        data={mentors}
        keyExtractor={mentor => mentor.id}
        vertical
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View style={styles.listItem}>
              <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Image
                  style={styles.thumbnail}
                  source={{ uri: img[index] }}
                />
                <Image
                  style={styles.stars}
                  source={{ uri: starts }} />
              </View>

              <Text style={styles.name}>
                {item.name}
              </Text>
              <Text style={styles.text}>
                {item.university}
              </Text>
              <Text style={styles.text}>
                {item.country}
              </Text>
              <Text style={styles.text}>
                {item.university}
              </Text>          

              <Text style={styles.price}>
                {item.price ? `R$ ${item.price}` : "Gratuito"}
              </Text>

              <TouchableOpacity onPress={() => handleNavigate(item._id) } style={styles.button}>
                <Text style={styles.buttonText}>Ver Detalhes</Text>
              </TouchableOpacity>


          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30
  },

  title: {
    fontSize: 20,
    color: "#444",
    paddingHorizontal: 20,
    marginBottom: 15,
  },

  bold: {
    fontWeight: 'bold',
  },

  list: {
    paddingHorizontal: 20,
  },

  listItem: {
    marginRight: 15,
    marginBottom: 15,
    padding: 10,
  },

  thumbnail: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  company: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginTop: 10,
    width: 100,
    height: 50,
    textAlign: "center"
  },

  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginTop: 0
  },

  button: {
    height: 32,
    backgroundColor: "#C000B9",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 15,
  },

  name: {
    color: "#C000B9",
    fontSize: 20,
    fontWeight: "bold",
  },

  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 12
  }
});

export default withNavigation(MentorList);