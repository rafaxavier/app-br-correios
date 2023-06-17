import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, Modal, Text } from 'react-native';
import IconMaterialCI from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';
import { StackNavigationProp } from '@react-navigation/stack';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { styles } from './styles';
import AddCodRastreioModal from './ModalAddCodigo';
import ModalDetalhesObjeto from './ModalDetalhes';
import {
  getItems,
  deletarObjetoById,
  fecthObjeto,
  deletarTodosObjetos,
} from '../../services/storage';
import RenderList from './RenderList';

type RootStackParamList = {
  HomeScreen: undefined;
  CalcScreen: undefined;
  GetCepScreen: undefined;
};

type NavigationProps = StackNavigationProp<RootStackParamList>;

interface HomeScreenProps {
  navigation: NavigationProps;
}

interface Objeto {
  id: string;
  name: string;
  eventos: Evento[];
}

interface Evento {
  descricao: string;
  evento: string;
  codigo: string;
  tipo: string;
  dtHrCriado: string;
}

export default function HomeScreen({
  navigation,
}: HomeScreenProps): JSX.Element {
  const [data, setData] = useState<Objeto[]>([]);
  const [modalAddObjeto, setModalAddObjeto] = useState<boolean>(false);
  const [modalDetalhesObjeto, setModalDetalhesObjeto] =
    useState<boolean>(false);
  const [code, setCode] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [objeto, setObjeto] = useState<Objeto>();

  async function loadItems() {
    const dados = await getItems();
    setData(dados.filter(val => val && val.eventos));
  }

  async function handleDeletarObjetoById(id: string): Promise<void> {
    await deletarObjetoById(id);
    setModalDetalhesObjeto(false);
    loadItems();
  }

  useEffect(() => {
    if (code) {
      fecthObjeto(code, name).then(() => loadItems());
    }
  }, [code, name]);

  useEffect(() => {
    async function fetchAndUpdateObjects() {
      const objects = await getItems();
      setData(objects);
      const ids = objects.map(obj => obj.id);
      await Promise.all(ids.map(id => fecthObjeto(id, name)));
    }

    fetchAndUpdateObjects();
  }, [name]);

  useEffect(() => {
    loadItems();
    // deletarTodosObjetos();
  }, []);

  function handleModalAddCod(): void {
    setModalAddObjeto(true);
  }

  const handleModalDetalhesObjeto = (val: Objeto): void => {
    setObjeto(val);
    setModalDetalhesObjeto(true);
  };

  const onModalInputChange = (nome: string, codigo: string) => {
    setCode(codigo);
    setName(nome);
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#153CA7', '#F9F905']}
        style={styles.background}
      />
      {/* modal add objeto */}
      <Modal transparent animationType="slide" visible={modalAddObjeto}>
        <AddCodRastreioModal
          onValue={onModalInputChange}
          closeModal={() => setModalAddObjeto(false)}
        />
      </Modal>

      {/* modal exibe detalhes objeto */}
      <Modal transparent animationType="slide" visible={modalDetalhesObjeto}>
        {objeto && (
          <ModalDetalhesObjeto
            obj={objeto}
            closeModal={() => setModalDetalhesObjeto(false)}
            handleDeletarObjetoById={() => handleDeletarObjetoById(objeto.id)}
          />
        )}
      </Modal>

      {/* header */}
      <View style={{ marginTop: 45, marginBottom: 15 }}>
        <Header
          title="Rastreio de Objetos"
          rightIcon={{
            iconComponent: (
              <IconMaterialCI
                style={{ fontSize: 45, color: '#F9F905' }}
                name="plus-circle"
              />
            ),
            onPress: handleModalAddCod,
          }}
          leftIcon={{
            iconComponent: undefined,
            onPress(): void {
              throw new Error('Function not implemented.');
            },
          }}
        />
      </View>

      {data.length > 0 ? (
        <RenderList
          dados={data}
          handleModalDetalhesObjeto={handleModalDetalhesObjeto}
        />
      ) : (
        <View
          style={{
            marginTop: 90,
            marginBottom: 90,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text>Nenhum Objeto adicionado!!!</Text>
        </View>
      )}
      <Footer navigation={navigation} />
    </SafeAreaView>
  );
}
