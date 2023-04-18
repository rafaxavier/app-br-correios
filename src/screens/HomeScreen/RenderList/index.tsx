import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { convertDate } from '../../../services/utils';
import { styles } from './styles';

interface Props {
  handleModalDetalhesObjeto?: (value: Objeto) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dados?: any[];
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

export default function RenderList({
  handleModalDetalhesObjeto,
  dados = [],
}: Props) {
  return (
    <ScrollView style={styles.cardContainer}>
      {dados.map((value, index) => {
        const event: Evento | null = value.eventos ? value.eventos[0] : null;
        const codigo = event ? event.codigo : value.codigo;
        const tipo = event ? event.tipo : value.tipo;
        const descricao = event ? event.descricao : value.descricao;
        const dtHrCriado = event ? event.dtHrCriado : value.dtHrCriado;
        const getIcon = () => {
          switch (codigo) {
            case 'RO':
              return 'truck';
            case 'BDE':
              if (tipo === '01') {
                return 'check-circle';
              }
              if (tipo === '20') {
                return 'minus-circle';
              }
              return null;

            case 'OEC':
              if (tipo === '01') {
                return 'info-circle';
              }
              return null;

            case 'PAR':
              if (tipo === '10') {
                return 'cubes';
              }
              if (tipo === '16') {
                return 'map-marker-alt';
              }
              return null;

            case 'PO':
              if (tipo === '01') {
                return 'plane';
              }
              return null;

            default:
              return null;
          }
        };

        const icon = getIcon();

        const iconStyle = (() => {
          switch (icon) {
            case 'truck':
              return styles.iconCaminho;
            case 'check-circle':
              return styles.iconSuccess;
            case 'info-circle':
              return styles.iconAlert;
            case 'minus-circle':
              return styles.iconSad;
            case 'cubes':
              return styles.iconFisc;
            case 'map-marker-alt':
              return styles.iconChecking;
            case 'plane':
              return styles.iconPost;
            default:
              return null;
          }
        })();

        return event ? (
          <TouchableOpacity
            key={value.id || `${index}`}
            style={styles.card}
            onPress={() => {
              if (handleModalDetalhesObjeto) {
                handleModalDetalhesObjeto(value);
              }
            }}
          >
            <View style={styles.line1}>
              {icon && <IconFontAwesome5 style={iconStyle} name={icon} />}
              <Text style={styles.descricao} numberOfLines={1}>
                {descricao}
              </Text>
            </View>
            <View style={styles.line2}>
              <Text style={styles.codigo}>{value.id}</Text>
              <Text style={styles.data}>{convertDate(dtHrCriado)}</Text>
            </View>
          </TouchableOpacity>
        ) : (
          <View style={styles.card} key={value.id || `${index}`}>
            <View style={styles.line1}>
              {icon && <IconFontAwesome5 style={iconStyle} name={icon} />}
              <Text style={styles.descricao}>{descricao}</Text>
            </View>
            <View style={styles.line2}>
              <Text style={styles.data}>{convertDate(dtHrCriado)}</Text>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
}

RenderList.defaultProps = {
  handleModalDetalhesObjeto: undefined,
  dados: [],
};
