import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Modal,
} from 'react-native';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import { LinearGradient } from 'expo-linear-gradient';
import { StackNavigationProp } from '@react-navigation/stack';
import Footer from '../../components/Footer';
import { styles } from './styles';
import AddCodRastreioModal from './ModalAddCodigo';
import {
  getItems,
  deletarObjetoById,
  fecthObjeto,
  deletarTodosObjetos,
} from '../../services/storage';

type RootStackParamList = {
  HomeScreen: undefined;
  CalcScreen: undefined;
  GetCepScreen: undefined;
};

type NavigationProps = StackNavigationProp<RootStackParamList>;

interface FooterProps {
  navigation: NavigationProps;
}

export default function HomeScreen({ navigation }: FooterProps): JSX.Element {
  const [error, setError] = useState<string>('');
  const [data, setData] = useState<any[]>([]);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [cod, setCode] = useState<string>('');

  async function loadItems() {
    // *******************************
    // deletarTodosObjetos();

    const dados = await getItems();

    // dados.map(val => {
    //   console.log(val.id);
    //   console.log(val.eventos[0]);
    //   // eslint-disable-next-line array-callback-return
    //   // val.eventos.map(evento => {
    //   //   console.log(evento.descricao);
    //   // });
    // });

    setData(dados.filter(val => val && val.eventos));
    // setData(dados);
  }

  async function handleDeletarObjetoById(id: string): Promise<void> {
    await deletarObjetoById(id);
    loadItems();
  }

  useEffect(() => {
    if (cod) {
      fecthObjeto(cod).then(() => loadItems());
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cod]);

  useEffect(() => {
    async function fetchAndUpdateObjects() {
      const objects = await getItems();
      setData(objects);
      const ids = objects.map(obj => obj.id);
      await Promise.all(ids.map(id => fecthObjeto(id)));
    }

    fetchAndUpdateObjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    loadItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleModalAddCod(): void {
    setModalVisible(true);
  }

  const onModalInputChange = (value: string) => {
    setCode(value);
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#153CA7', '#F9F905']}
        style={styles.background}
      />
      <Modal transparent animationType="slide" visible={modalVisible}>
        <AddCodRastreioModal
          onValue={onModalInputChange}
          closeModal={() => setModalVisible(false)}
        />
      </Modal>

      {/* header */}
      <View style={styles.topo}>
        <Text style={styles.title}>Rastreio de Objetos</Text>
        <TouchableOpacity onPress={() => handleModalAddCod()}>
          <IconFontAwesome5 style={styles.iconAdd} name="plus-circle" />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.cardContainer}>
        {data.length > 0
          ? data.map(val => {
              // console.log(val.id);
              // console.log(val.eventos[0]);
              return (
                <TouchableOpacity key={val.id} style={styles.card}>
                  <View style={styles.line1}>
                    {val.eventos[0].codigo === 'RO' && (
                      <IconMaterial
                        style={styles.iconCaminho}
                        name="local-shipping"
                      />
                    )}
                    {val.eventos[0].codigo === 'BDE' &&
                      val.eventos[0].tipo === '01' && (
                        <IconFontAwesome5
                          style={styles.iconSuccess}
                          name="check-circle"
                        />
                      )}
                    {val.eventos[0].codigo === 'OEC' &&
                      val.eventos[0].tipo === '01' && (
                        <IconFontAwesome5
                          style={styles.iconAlert}
                          name="info-circle"
                        />
                      )}
                    {val.eventos[0].codigo === 'BDE' &&
                      val.eventos[0].tipo === '20' && (
                        <IconFontAwesome5 style={styles.iconSad} name="tired" />
                      )}
                    {val.eventos[0].codigo === 'PAR' &&
                      val.eventos[0].tipo === '10' && (
                        <IconMaterial
                          style={styles.iconFisc}
                          name="local-police"
                        />
                      )}
                    {val.eventos[0].codigo === 'PAR' &&
                      val.eventos[0].tipo === '16' && (
                        <IconFontAwesome5
                          style={styles.iconChecking}
                          name="map-marker-alt"
                        />
                      )}
                    {val.eventos[0].codigo === 'PO' &&
                      val.eventos[0].tipo === '01' && (
                        <IconMaterial
                          style={styles.iconPost}
                          name="airplanemode-on"
                        />
                      )}
                    <Text style={styles.descricao} numberOfLines={1}>
                      {val.eventos[0].descricao}
                    </Text>
                  </View>
                  <View style={styles.line2}>
                    <Text style={styles.codigo}>{val.id}</Text>
                    <Text style={styles.data}>{val.eventos[0].dtHrCriado}</Text>
                    <TouchableOpacity>
                      <IconMaterial
                        style={styles.iconDeletePost}
                        name="delete-sweep"
                        onPress={() => handleDeletarObjetoById(val.id)}
                      />
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              );
            })
          : null}
      </ScrollView>
      <Footer navigation={navigation} />
    </SafeAreaView>
  );
}
