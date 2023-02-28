import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Image, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { styles } from './styles';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconMaterialC from 'react-native-vector-icons/MaterialCommunityIcons';
import Footer from '../../components/Footer';
import api from './../../services/api';
import LottieView from 'lottie-react-native'

export default function GetCepScreen({ navigation }) {
  const [cep, setCep] = useState('');
  const [error, setError] = useState('');
  const [data, setData] = useState('');
  const [loading, setLoading] = useState('off');

  function formatCEP(cep) {
    cep = cep.replace(/\D/g, ''); // Remove qualquer caracter que não seja número
    cep = cep.substring(0, 8); // Limita o número de caracteres para 8
    cep = cep.replace(/^(\d{5})(\d)/, '$1-$2'); // Adiciona o hífen depois dos primeiros cinco dígitos
    return cep;
  }

  async function handleGetCep() {
    setLoading('on');
    try {
      const response = await api.get(`/busca-cep?cep=${cep}`);
      setData(response.data);
      setLoading('off');
    } catch (error) {
      setCep('');
      setLoading('off');
      setError(error);
      setTimeout(() => {
        setError('')
      }, 3000);
    }
  }

  return (
    <SafeAreaView style={styles.container} >
      {loading === 'on' && data === '' ?
        <LottieView style={styles.iconLoading}
          source={require('./../../assets/95728-loading-19.json')}
          autoPlay={true}
        />
        : (
          <View style={styles.search}>
            <Text style={styles.title}>Buscar por cep</Text>
            <TextInput style={styles.input}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Digite o cep"
              placeholderTextColor="#153CA7"
              value={formatCEP(cep)}
              onChangeText={setCep}
            />
            <TouchableOpacity onPress={handleGetCep}>
              <IconFontAwesome5 style={styles.icon} name="search-location" />
            </TouchableOpacity>
          </View>
        )
      }

      {
        // caso tenha resuldado
        data &&
        <View style={styles.card}>
          <Text style={styles.txt}>Cep: {data.cep}</Text>
          <Text style={styles.txt}>Logradouro: {data.logradouro}</Text>
          <Text style={styles.txt}>Complemento: {data.complemento}</Text>
          <Text style={styles.txt}>Bairro: {data.bairro}</Text>
          <Text style={styles.txt}>Localidade: {data.localidade}</Text>
          <Text style={styles.txt}>UF: {data.uf}</Text>
          <Text style={styles.txt}>ibge: {data.ibge}</Text>
          <Text style={styles.txt}>siafi: {data.siafi}</Text>
          <Text style={styles.txt}>DDD: {data.ddd}</Text>
        </View>
      }
      {
        // caso tenha erro
        error ?
          <View style={styles.cardError}>
            <Text style={styles.txt}>{'Erro inesperado, tente novamente mais tarde' || error.message}</Text>
          </View> : null
      }

      <Footer navigation={navigation} />
    </SafeAreaView>
  );
}




