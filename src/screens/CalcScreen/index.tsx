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

type RootStackParamList = {
  HomeScreen: undefined;
  CalcScreen: undefined;
  GetCepScreen: undefined;
};

type NavigationProps = StackNavigationProp<RootStackParamList>;

interface CalcScreenProps {
  navigation: NavigationProps;
}

export default function CalcScreen({ navigation }: CalcScreenProps) {
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
      <View style={{ flex: 1, margin: 10 }}>
        <ScrollView
          style={{
            width: '100%',
            top: 40,
            marginBottom: 120,
          }}
        >
          {/* inputs Ceps  OK */}
          <View style={styles.line}>
            <View style={{ width: '50%' }}>
              <Text style={styles.label}>Origem:</Text>
              <TextInput
                style={styles.input}
                onChangeText={setSCepOrigem}
                value={formatCEP(sCepOrigem)}
              />
            </View>
            <View style={{ width: '50%' }}>
              <Text style={styles.label}>Destino:</Text>
              <TextInput
                style={styles.input}
                onChangeText={setSCepDestino}
                value={formatCEP(sCepDestino)}
              />
            </View>
          </View>

          {/* tipos de servicos OK */}
          <SelectList
            boxStyles={{ backgroundColor: '#fff' }}
            dropdownStyles={{ backgroundColor: '#fff', marginTop: 0 }}
            inputStyles={{ color: 'grey' }}
            placeholder="Selecione o Serviço"
            setSelected={(val: string) => setNCdServico(val)}
            data={[
              { key: '04014', value: 'SEDEX à vista' },
              { key: '04065', value: 'SEDEX à vista pagamento na entrega' },
              { key: '04510', value: 'PAC à vista' },
              { key: '04707', value: 'PAC à vista pagamento na entrega' },
              { key: '40169', value: 'SEDEX12 ( à vista e a faturar)' },
              { key: '40215', value: 'SEDEX 10 (à vista e a faturar)' },
              { key: '40290', value: 'SEDEX Hoje Varejo' },
            ]}
            save="key"
          />

          <Divider />
          {/* teste formato  */}

          {/* <View>
            <TouchableOpacity
            // onPress={proximoQuadro}
            >
              <ImageBackground
                source={require('../../assets/caixa.png')}
                style={{ width: 111, height: 322 }}
              />
            </TouchableOpacity>
          </View> */}

          {/* ffim teste formato */}
          <RadioButton.Group
            onValueChange={newValue => setValue(newValue)}
            value={value}
          >
            <Text>Formato</Text>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <View>
                <Text>caixa/pacote</Text>
                <RadioButton value="1" />
              </View>
              <View>
                <Text>rolo/prisma</Text>
                <RadioButton color="blue" value="2" />
              </View>
              <View>
                <Text>Envelope</Text>
                <RadioButton value="3" />
              </View>
            </View>
          </RadioButton.Group>
          {/* fim teste  */}

          {/* selects */}

          <Text style={styles.label}>Peso Estimado (Kg): {nVlPeso}</Text>
          <Slider
            minimumValue={1}
            maximumValue={30}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
            thumbTintColor="#FFFFFF"
            onValueChange={e => setNVlPeso(String(e.toFixed(0)))}
          />

          {/* Altura  */}
          <Text style={styles.label}>Altura:{nVlAltura}</Text>
          <Slider
            minimumValue={1}
            maximumValue={100}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
            thumbTintColor="#FFFFFF"
            onValueChange={e => setNVlAltura(parseFloat(e.toFixed(0)))}
          />
          {/* fim Altura */}

          {/* largura  */}
          <Text style={styles.label}>Largura:{nVlLargura}</Text>
          <Slider
            minimumValue={10}
            maximumValue={100}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
            thumbTintColor="#FFFFFF"
            onValueChange={e => setNVlLargura(parseFloat(e.toFixed(0)))}
          />
          {/* fim largura */}

          {/* Comprimento  */}
          <Text style={styles.label}>Comprimento:{nVlComprimento}</Text>
          <Slider
            minimumValue={15}
            maximumValue={100}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
            thumbTintColor="#FFFFFF"
            onValueChange={e => setNVlComprimento(parseFloat(e.toFixed(0)))}
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
            onValueChange={e => setNVlDiametro(parseFloat(e.toFixed(0)))}
          />
          {/* fim Diametro */}

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Calcular</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <Footer navigation={navigation} />
    </SafeAreaView>
  );
}
