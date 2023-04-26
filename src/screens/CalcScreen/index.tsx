import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StackNavigationProp } from '@react-navigation/stack';
import IconMaterialCI from 'react-native-vector-icons/MaterialCommunityIcons';
// eslint-disable-next-line import/no-extraneous-dependencies
import Slider from '@react-native-community/slider';
import api from '../../services/api';
import { formatCEP } from '../../services/utils';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { styles } from './styles';

type RootStackParamList = {
  HomeScreen: undefined;
  CalcScreen: undefined;
  GetCepScreen: undefined;
};

type NavigationProps = StackNavigationProp<RootStackParamList>;

interface CalcScreenProps {
  navigation: NavigationProps;
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   label: {
//     marginVertical: 10,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     padding: 10,
//     width: '80%',
//   },
//   button: {
//     backgroundColor: '#1c6cce',
//     padding: 10,
//     borderRadius: 5,
//     marginTop: 20,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//   },
// });

export default function CalcScreen({ navigation }: CalcScreenProps) {
  const [sCepOrigem, setSCepOrigem] = useState('');
  const [sCepDestino, setSCepDestino] = useState('');
  const [nVlPeso, setNVlPeso] = useState('');
  const [nCdFormato, setNCdFormato] = useState('');
  const [nVlComprimento, setNVlComprimento] = useState(0);
  const [nVlAltura, setNVlAltura] = useState(0);
  const [nVlLargura, setNVlLargura] = useState(0);
  const [nCdServico, setNCdServico] = useState('');
  const [nVlDiametro, setNVlDiametro] = useState(0);
  const [data, setData] = useState('');

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
      <ScrollView style={{ flex: 1, width: '100%', top: 40 }}>
        {/* inputs Ceps */}
        <View style={styles.line}>
          <View style={{ width: '50%', paddingHorizontal: 10, margin: 5 }}>
            {sCepOrigem && (
              <Text
                style={{
                  fontSize: 12,
                  position: 'absolute',
                  bottom: 20,
                  margin: 2,
                  left: 7,
                }}
              >
                Cep Origem
              </Text>
            )}
            <TextInput
              placeholderTextColor="#fff"
              placeholder="Insira o Cep da Origem"
              style={{
                borderBottomWidth: 1,
                borderColor: '#fff',
                color: '#fff',
              }}
              onChangeText={setSCepOrigem}
              value={formatCEP(sCepOrigem)}
            />
          </View>
          <View style={{ width: '50%', paddingHorizontal: 10, margin: 5 }}>
            {sCepDestino && (
              <Text
                style={{
                  fontSize: 12,
                  position: 'absolute',
                  bottom: 20,
                  margin: 2,
                  left: 7,
                }}
              >
                Cep Destino
              </Text>
            )}
            <TextInput
              placeholderTextColor="#fff"
              placeholder="Insira o Cep do Destino"
              style={{
                borderBottomWidth: 1,
                borderColor: '#fff',
                color: '#fff',
              }}
              onChangeText={setSCepDestino}
              value={formatCEP(sCepDestino)}
            />
          </View>
        </View>
        {/* selects */}
        <View style={styles.line}>
          <View style={{ width: '50%' }}>
            <Text style={styles.label}>Peso:</Text>
            <TextInput
              style={styles.input}
              onChangeText={setNVlPeso}
              value={nVlPeso}
            />
          </View>
          <View style={{ width: '50%' }}>
            <Text style={styles.label}>Formato:</Text>
            <TextInput
              style={styles.input}
              onChangeText={setNCdFormato}
              value={nCdFormato}
            />
          </View>
        </View>

        {/* Altura  */}
        <Text style={styles.label}>Altura:{nVlAltura}</Text>
        <Slider
          minimumValue={0}
          maximumValue={100}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          thumbTintColor="#FFFFFF"
          onValueChange={value => setNVlAltura(parseFloat(value.toFixed(0)))}
        />
        {/* fim Altura */}

        {/* largura  */}
        <Text style={styles.label}>Largura:{nVlLargura}</Text>
        <Slider
          minimumValue={0}
          maximumValue={100}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          thumbTintColor="#FFFFFF"
          onValueChange={value => setNVlLargura(parseFloat(value.toFixed(0)))}
        />
        {/* fim largura */}

        {/* Comprimento  */}
        <Text style={styles.label}>Comprimento:{nVlComprimento}</Text>
        <Slider
          minimumValue={0}
          maximumValue={100}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          thumbTintColor="#FFFFFF"
          onValueChange={value =>
            setNVlComprimento(parseFloat(value.toFixed(0)))
          }
        />
        {/* fim Comprimento */}

        {/* Diametro  */}
        <Text style={styles.label}>Diametro:{nVlDiametro}</Text>
        <Slider
          minimumValue={0}
          maximumValue={100}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          thumbTintColor="#FFFFFF"
          onValueChange={value => setNVlDiametro(parseFloat(value.toFixed(0)))}
        />
        {/* fim Diametro */}

        {/* aqui será um select */}
        <Text style={styles.label}>Serviço:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setNCdServico}
          value={nCdServico}
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>
      </ScrollView>
      <Footer navigation={navigation} />
    </SafeAreaView>
  );
}
