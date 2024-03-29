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
  name: string;
  eventos: Evento[];
}

interface Evento {
  descricao: string;
  detalhe: string;
  evento: string;
  codigo: string;
  tipo: string;
  dtHrCriado: string;
  unidade: Unidade;
  unidadeDestino: UnidadeDestino;
}

interface Unidade {
  endereco: Endereco;
  tipo: string;
  nome: string;
}

interface Endereco {
  cidade: string;
  uf: string;
}

interface UnidadeDestino {
  endereco: Endereco;
  tipo: string;
  nome: string;
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
        const detalhe = event ? event.detalhe : value.detalhe;
        const dtHrCriado = event ? event.dtHrCriado : value.dtHrCriado;
        const cidade = event
          ? event.unidade?.endereco?.cidade
          : value.unidade?.endereco?.cidade;
        const uf = event
          ? event.unidade?.endereco?.uf
          : value.unidade?.endereco?.uf;
        const unidadeTipo = event ? event.unidade?.tipo : value.unidade?.tipo;
        const unidadeNome = event ? event.unidade?.nome : value.unidade?.nome;
        const unidadeDestinoNome = event
          ? event.unidadeDestino?.nome
          : value.unidadeDestino?.nome;
        const unidadeDestinoCidade = event
          ? event.unidadeDestino?.endereco?.cidade
          : value.unidadeDestino?.endereco?.cidade;
        const unidadeDestinoUf = event
          ? event.unidadeDestino?.endereco?.uf
          : value.unidadeDestino?.endereco?.uf;

        const getIcon = () => {
          switch (codigo) {
            case 'RO':
            case 'DO':
              return 'long-arrow-alt-up';
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
                return 'shield-alt';
              }
              if (tipo === '16') {
                return 'plane-arrival';
              }
              return null;

            case 'PO':
              if (tipo === '01') {
                return 'plane-departure';
              }
              return null;

            default:
              return null;
          }
        };

        const icon = getIcon();

        const iconStyle = (() => {
          switch (icon) {
            case 'long-arrow-alt-up':
              return styles.iconCaminho;
            case 'check-circle':
              return styles.iconSuccess;
            case 'info-circle':
              return styles.iconAlert;
            case 'minus-circle':
              return styles.iconSad;
            case 'shield-alt':
              return styles.iconFisc;
            case 'plane-arrival':
              return styles.iconChecking;
            case 'plane-departure':
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
            <Text style={styles.nome}>
              {value.name ?? value.name.toUpperCase()}
            </Text>

            <View style={styles.cardHead}>
              {icon && <IconFontAwesome5 style={iconStyle} name={icon} />}
              <Text style={styles.descricao} numberOfLines={1}>
                {descricao}
              </Text>
            </View>
            <View style={styles.cardBody}>
              <Text style={styles.codigo}>{value.id}</Text>
              <Text style={styles.text}>{convertDate(dtHrCriado)}</Text>
            </View>
          </TouchableOpacity>
        ) : (
          <View style={styles.card} key={value.id || `${index}`}>
            <View style={styles.cardHead}>
              {icon && <IconFontAwesome5 style={iconStyle} name={icon} />}
              <Text style={styles.descricao}>{descricao}</Text>
            </View>
            {detalhe && (
              <View style={styles.detalhe}>
                <Text>{detalhe || ''}</Text>
              </View>
            )}

            {unidadeTipo && (
              <View style={styles.cardBody}>
                <Text style={styles.text}>
                  {unidadeTipo} {unidadeNome || `| ${cidade}-${uf}`}
                </Text>
              </View>
            )}
            <View style={styles.cardBody}>
              <Text style={styles.text}>
                {dtHrCriado ? convertDate(dtHrCriado) : ''}
              </Text>
            </View>

            {unidadeDestinoNome && (
              <View>
                <View style={styles.cardBody}>
                  <IconFontAwesome5
                    style={styles.iconCaminho2}
                    name="shipping-fast"
                  />
                </View>
                <View style={styles.cardBody}>
                  <Text style={styles.text}>{unidadeDestinoNome || ''}</Text>
                </View>
                <View>
                  <View style={styles.cardBody}>
                    <Text style={styles.text}>
                      {unidadeDestinoCidade || ''} - {unidadeDestinoUf || ''}
                    </Text>
                  </View>
                </View>
              </View>
            )}
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
