import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import IconMaterialCI from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../../components/Header';
import { styles } from './styles';
import RenderList from '../RenderList';

interface Props {
  closeModal: () => void;
  handleDeletarObjetoById: (id: string) => Promise<void>;
  obj: Objeto;
}

interface Objeto {
  id: string;
  eventos: Evento[];
}

interface Evento {
  descricao: string;
  evento: string;
  codigo: string;
  tipo: string;
  dtHrCriado: string;
}

export default function ModalDetalhesObjeto({
  closeModal,
  handleDeletarObjetoById,
  obj,
}: Props) {
  const [objeto] = useState<Objeto>(obj);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#153CA7', '#F9F905']}
        style={styles.background}
      />
      <Header
        title="Status do Objeto"
        leftIcon={{
          iconComponent: (
            <IconMaterialCI
              style={{ fontSize: 45, color: '#F9F905' }}
              name="arrow-left-circle"
            />
          ),
          onPress: closeModal,
        }}
        rightIcon={{
          iconComponent: (
            <IconMaterialCI
              style={{ fontSize: 45, color: 'red' }}
              name="delete-circle"
            />
          ),
          onPress: () => handleDeletarObjetoById(objeto.id),
        }}
      />
      <Text style={styles.codigoHeader}>{objeto.id}</Text>

      <RenderList dados={objeto.eventos} />
    </View>
  );
}
