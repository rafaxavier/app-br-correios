import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import React, { useState, useEffect } from 'react';


export default function App() {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState();

  return (
    <View style={styles.container}>
      <TextInput
        value={cep}
        placeholder="Digite o CEP"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
