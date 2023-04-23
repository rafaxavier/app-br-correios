import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LottieView from 'lottie-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StackNavigationProp } from '@react-navigation/stack';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import api from '../../services/api';
import { styles } from './styles';
import { animation } from '../../assets/output';

interface Erro {
  mensagem: string;
}

interface ApiResponse {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

type RootStackParamList = {
  HomeScreen: undefined;
  CalcScreen: undefined;
  GetCepScreen: undefined;
};

type NavigationProps = StackNavigationProp<RootStackParamList>;

interface GetCepScreenProps {
  navigation: NavigationProps;
}

export default function GetCepScreen({ navigation }: GetCepScreenProps) {
  const [cep, setCep] = useState<string>('');
  const [erro, setErro] = useState<Erro | undefined>();
  const [data, setData] = useState<ApiResponse>();
  const [loading, setLoading] = useState<'on' | 'off'>('off');

  function formatCEP(paramCep: string) {
    let cepFormater = paramCep;
    cepFormater = cepFormater.replace(/\D/g, ''); // Remove qualquer caracter que não seja número
    cepFormater = cepFormater.substring(0, 8); // Limita o número de caracteres para 8
    cepFormater = cepFormater.replace(/^(\d{5})(\d)/, '$1-$2'); // Adiciona o hífen depois dos primeiros cinco dígitos
    return cepFormater;
  }

  async function handleGetCep() {
    setLoading('on');
    try {
      if (cep.length <= 8) {
        throw new Error('Cep inválido, cep exemplo: 30668-635');
      } else {
        setData(undefined);
        const response = await api.get(`/busca-cep?cep=${cep}`);
        setData(response.data);
        setLoading('off');
      }
    } catch (e) {
      setCep('');
      setLoading('off');
      if (e) {
        setErro({ mensagem: 'Erro inesperado, tenta novamente mais tarde' });
      }
      setData(undefined);
      setTimeout(() => {
        setErro(undefined);
      }, 3000);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#153CA7', '#F9F905']}
        style={styles.background}
      />
      {loading === 'on' ? (
        <View style={styles.containerLoading}>
          <LottieView style={styles.iconLoading} source={animation} autoPlay />
        </View>
      ) : (
        <View style={{ marginTop: 45, marginBottom: 15, alignItems: 'center' }}>
          <Header title="Buscar por cep" />
          <View style={styles.input}>
            <TextInput
              style={styles.inputText}
              placeholder="Digite o Cep"
              placeholderTextColor="#153CA7"
              value={formatCEP(cep)}
              onChangeText={setCep}
            />
            <TouchableOpacity onPress={() => handleGetCep()}>
              <IconFontAwesome5 style={styles.icon} name="search-location" />
            </TouchableOpacity>
          </View>
        </View>
      )}

      {
        // caso tenha resuldado
        data && (
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
        )
      }
      {
        // caso tenha erro
        erro ? (
          <View style={styles.cardError}>
            <Text style={{ color: '#fff', fontSize: 16 }}>{erro.mensagem}</Text>
          </View>
        ) : null
      }

      <Footer navigation={navigation} />
    </SafeAreaView>
  );
}
