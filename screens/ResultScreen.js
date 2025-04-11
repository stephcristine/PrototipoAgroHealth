import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function ResultScreen({ route, navigation }) {
  const { resultado } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Diagnóstico</Text>

      <Image source={{ uri: resultado.imagem }} style={styles.image} />

      <View style={styles.card}>
        <Text style={styles.text}>🦠 Doença: {resultado.doenca}</Text>
        <Text style={styles.text}>📊 Certeza: {resultado.certeza}</Text>
        <Text style={styles.text}>💊 Tratamento: {resultado.tratamento}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>🔁 Analisar outra imagem</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    alignItems: 'center',
    backgroundColor: 'black',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 15,
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#e0ffe4',
    padding: 20,
    borderRadius: 10,
    width: '85%',
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
  button: {
    marginTop: 30,
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
