import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text, ActivityIndicator, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function HomeScreen({ navigation }) {
  const [loading, setLoading] = useState(false);

  const simulateSendToIA = async (imageUri) => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      const fakeResponse = {
        imagem: imageUri,
        doenca: 'Ferrugem Asiática',
        certeza: '92%',
        tratamento: 'Aplicar fungicida à base de estrobilurina',
      };
      navigation.navigate('Resultado', { resultado: fakeResponse });
    }, 2000);
  };

  const handleImage = async (source) => {
    const permission = await (source === 'camera'
      ? ImagePicker.requestCameraPermissionsAsync()
      : ImagePicker.requestMediaLibraryPermissionsAsync());

    if (permission.status !== 'granted') {
      Alert.alert('Permissão negada', 'Você precisa permitir o acesso.');
      return;
    }

    const result = await (source === 'camera'
      ? ImagePicker.launchCameraAsync({ quality: 1 })
      : ImagePicker.launchImageLibraryAsync({ quality: 1 }));

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      simulateSendToIA(uri);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} resizeMode="contain" />

      <TouchableOpacity style={styles.button} onPress={() => handleImage('camera')}>
        <Text style={styles.buttonText}>📷 Tirar foto</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => handleImage('gallery')}>
        <Text style={styles.buttonText}>🖼️ Selecionar da galeria</Text>
      </TouchableOpacity>

      {loading && <ActivityIndicator size="large" color="#4CAF50" style={{ marginTop: 30 }} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 60,
    backgroundColor: 'black',
  },
  logo: {
    width: 200,
    height: 100,
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
