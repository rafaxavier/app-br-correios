import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles';

interface Props {
  onValue: (nome: string, codigo: string) => void;
  closeModal: () => void;
}

export default function AddCodigoRastreioModal({ onValue, closeModal }: Props) {
  const [nome, setNome] = useState<string>('');
  const [codigo, setCodigo] = useState<string>('');
  const [canSave, setCanSave] = useState<boolean>(true);

  useEffect(() => {
    const regex = /^[A-Za-z]{0,2}\d{0,9}[A-Za-z]{0,2}$/;
    if (!regex.test(codigo)) {
      setCodigo('');
      setCanSave(false);
    } else {
      setCanSave(codigo.length === 13);
    }
  }, [codigo]);

  const getInput = () => {
    if (canSave) {
      onValue(nome, codigo);
    }
    closeModal();
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#153CA7', '#F9F905']}
        style={styles.background}
      />
      <View style={styles.modal}>
        <Text style={styles.title}>Adicionar Objeto</Text>
        <View style={styles.input}>
          <TextInput
            style={styles.inputText}
            placeholder="Nome do Objeto"
            placeholderTextColor="#153CA7"
            value={nome}
            onChangeText={setNome}
            maxLength={20}
          />
        </View>
        <View>
          <Text style={styles.textExemplo}>Exemplo: Presente da mamãe</Text>
        </View>

        <View style={styles.input}>
          <TextInput
            style={styles.inputText}
            placeholder="Código de Rastreio"
            placeholderTextColor="#153CA7"
            value={codigo}
            onChangeText={setCodigo}
            maxLength={13}
          />
        </View>

        <View>
          <Text style={styles.textExemplo}>Exemplo: LB792846408HK</Text>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.btnRed} onPress={closeModal}>
            <Text style={styles.textBtn}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btnBlue, canSave ? {} : { opacity: 0.5 }]}
            onPress={getInput}
            disabled={!canSave}
          >
            <Text style={styles.textBtn}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
