import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StackNavigationProp } from '@react-navigation/stack';
import IconMaterialCI from 'react-native-vector-icons/MaterialCommunityIcons';
import Slider from '@react-native-community/slider';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Divider, RadioButton } from 'react-native-paper';
// eslint-disable-next-line import/no-extraneous-dependencies
import { SelectList } from 'react-native-dropdown-select-list';
import api from '../../services/api';
import { formatCEP } from '../../services/utils';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { styles } from './styles';

export default function CalcScreen() {
  const [sCepOrigem, setSCepOrigem] = useState('');
  const [sCepDestino, setSCepDestino] = useState('');
  const [nVlPeso, setNVlPeso] = useState('1');
  const [nCdFormato, setNCdFormato] = useState('');
  const [nVlComprimento, setNVlComprimento] = useState(0);
  const [nVlAltura, setNVlAltura] = useState(0);
  const [nVlLargura, setNVlLargura] = useState(0);
  const [nCdServico, setNCdServico] = useState('');
  const [nVlDiametro, setNVlDiametro] = useState(0);
  const [data, setData] = useState('');
  const [value, setValue] = useState('first');

  const handleSubmit = async () => {
    try {
      const url = `/calcula-preco-prazo?sCepOrigem=${sCepOrigem}&sCepDestino=${sCepDestino}&nVlPeso=${nVlPeso}&nCdFormato=${nCdFormato}&nVlComprimento=${nVlComprimento}&nVlAltura=${nVlAltura}&nVlLargura=${nVlLargura}&nCdServico=${nCdServico}&nVlDiametro=${nVlDiametro}`;

      setData('');
      const response = await api.get(url);
      setData(response.data);
      console.log(data);
      // setLoading('off');
    } catch (e) {
      // setCep('');
      // setLoading('off');
      // if (e) {
      //   setErro({ mensagem: 'Erro inesperado, tenta novamente mais tarde' });
      // }

      setData('');
      // setTimeout(() => {
      //   setErro(undefined);
      // }, 3000);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#153CA7', '#F9F905']}
        style={styles.background}
      />
      {/* header */}
      <View style={{ marginTop: 45, marginBottom: 15 }}>
        <Header title="Calcular Frete" />
      </View>
      <View
        style={{
          marginTop: 250,
          marginBottom: 15,
        }}
      >
        <Header title="EM BREVE !!!" />
      </View>
    </SafeAreaView>
  );
}
