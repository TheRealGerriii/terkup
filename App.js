import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [radius, setRadius] = useState();
  const [height, setHeight] = useState();
  const [volume, setVolume] = useState();

  function calcVolume() {
    let result = 1 / 3 * Math.pow(radius, 2) * Math.PI * height
    setVolume(result)
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text>Sugár:</Text>
      <TextInput
      style={styles.sajat}
      placeholder="Sugár"
      onChangeText={ radius => setRadius(radius)}/>

      <Text>Magasság:</Text>
      <TextInput
      style={styles.sajat}
      placeholder="Magasság"
      onChangeText= {height => setHeight(height)}/>

      <Button
      style={{}}
      title="Számít"
      onPress={calcVolume}/>

      <View style={styles.szoveg}>
        <Text>Térfogat</Text>
      </View>

      <TextInput
      style={styles.sajat}
      placeholder={volume}
      disabled/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7e9c3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sajat: {
    borderWidth: 2.5,
    borderColor:'#ffae00',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    marginTop: 10,
    marginBottom: 10,
  },
  szoveg: {
    alignItems: 'start',
    justifyContent: 'start',
  }
});