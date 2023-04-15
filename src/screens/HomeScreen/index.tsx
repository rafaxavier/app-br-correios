import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, Modal } from 'react-native';
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
} from '../../services/storage';
import RenderList from './RenderList';

type RootStackParamList = {
  HomeScreen: undefined;
  CalcScreen: undefined;
  GetCepScreen: undefined;
};

type NavigationProps = StackNavigationProp<RootStackParamList>;

interface FooterProps {
  navigation: NavigationProps;
}

interface Objeto {
  id: string;
  eventos: Evento[];
}

interface Evento {
  descricao: string;
  codigo: string;
  tipo: string;
  dtHrCriado: string;
}

export default function HomeScreen({ navigation }: FooterProps): JSX.Element {
  const [data, setData] = useState<Objeto[]>([]);
  const [modalAddObjeto, setModalAddObjeto] = useState<boolean>(false);
  const [modalDetalhesObjeto, setModalDetalhesObjeto] =
    useState<boolean>(false);
  const [cod, setCode] = useState<string>('');
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
    if (cod) {
      fecthObjeto(cod).then(() => loadItems());
    }
  }, [cod]);

  useEffect(() => {
    async function fetchAndUpdateObjects() {
      const objects = await getItems();
      setData(objects);
      const ids = objects.map(obj => obj.id);
      await Promise.all(ids.map(id => fecthObjeto(id)));
    }

    fetchAndUpdateObjects();
  }, []);

  useEffect(() => {
    loadItems();
  }, []);

  function handleModalAddCod(): void {
    setModalAddObjeto(true);
  }

  const handleModalDetalhesObjeto = (val: Objeto): void => {
    setObjeto(val);
    setModalDetalhesObjeto(true);
  };

  const onModalInputChange = (value: string) => {
    setCode(value);
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
      <View style={{ marginTop: 25, marginBottom: 15 }}>
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

      <RenderList
        dados={data}
        handleModalDetalhesObjeto={handleModalDetalhesObjeto}
      />
      <Footer navigation={navigation} />
    </SafeAreaView>
  );
}
