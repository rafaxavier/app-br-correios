import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Image, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { styles } from './styles';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconMaterialC from 'react-native-vector-icons/MaterialCommunityIcons';
import Footer from '../../components/Footer';
import api from './../../services/api';

export default function GetCepScreen({ navigation }) {
  const [cep, setCep] = useState('');
  const [error, setError] = useState('');
  const [data, setData] = useState('');

  async function handleGetCep() {
    try {
      const response = await api.get(`/busca-cep?cep=${cep}`);
      setData(response.data);

    } catch (error) {
      setError(error.response.data.msg);
    }

  }

  return (
    <SafeAreaView style={styles.container} >
      <View style={styles.top}>
        <Text style={styles.title}>Buscar por cep</Text>
        <TextInput style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Digite o cep"
          placeholderTextColor="#153CA7"
          value={cep}
          onChangeText={setCep}
        />
        <TouchableOpacity onPress={handleGetCep}>
          <IconFontAwesome5 style={styles.icon} name="search-location" />
        </TouchableOpacity>
        {
          // caso não tenha dog
          data 
            ?
            <View >
              <Text>Cep: {data.cep}</Text>
              <Text>Logradouro: { data.logradouro }</Text>
              <Text>Complemento: { data.complemento }</Text>
              <Text>Bairro: { data.bairro }</Text>
              <Text>Localidade: { data.localidade }</Text>
              <Text>UF: { data.uf }</Text>
              <Text>ibge: { data.ibge }</Text>
              <Text>siafi: { data.siafi }</Text>
              <Text>DDD: { data.ddd }</Text>
            </View>

            :
            <View>
              <Text> Nenhum cep</Text>
            </View>

        }

      </View>
      <Footer navigation={navigation} />
    </SafeAreaView>
  );
}




