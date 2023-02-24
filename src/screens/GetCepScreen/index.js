import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Image, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { styles } from './styles';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconMaterialC from 'react-native-vector-icons/MaterialCommunityIcons';
import Footer from '../../components/Footer';


export default function GetCepScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  return (
    <SafeAreaView style={styles.container} >
      <View>
        <Text>Buscar por cep</Text>
      </View>
      <Footer navigation={navigation}/>
    </SafeAreaView>
  );
}




