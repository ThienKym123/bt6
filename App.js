import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, StyleSheet, Dimensions, Alert } from 'react-native';
import Swiper from 'react-native-swiper';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const App = () => {
  const [name, setName] = useState('');

  const handleContinue = () => {
    Alert.alert('Name entered:', name);
  };

  return (
    <Swiper style={styles.wrapper} showsButtons={false} loop={false} index={0}>
      <View style={styles.slide}>
        <Image source={require('./assets/image1.jpg')} style={styles.image} />
        <Text style={styles.title}>Scan, Pay & Enjoy!</Text>
        <Text style={styles.text}>
          Scan products you want to buy at your favorite store and pay by your phone & enjoy happy, friendly Shopping!
        </Text>
      </View>
      <View style={styles.blankSlide}></View>
      <View style={styles.inputSlide}>
        <Text style={styles.label}>Enter your name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
          onFocus={() => {}}
        />
        <Button title="Continue" onPress={handleContinue} />
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  blankSlide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  inputSlide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default App;
