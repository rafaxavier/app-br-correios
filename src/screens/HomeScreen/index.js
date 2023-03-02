import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Image, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { styles } from './styles';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconMaterialC from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import api from './../../services/api';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen({ navigation }) {

  const [error, setError] = useState('');
  const [data, setData] = useState('');
  const [cod, setCode] = useState('LB792846408HK');
  useEffect(() => {
    async function getRastreio() {
      try {
        const response = await api.get(`/rastreio?cod=${cod}`);
        setData(response.data);

      } catch (error) {
        setError(error);
      }
    }

    getRastreio()
  }, [])


  return (
    <SafeAreaView style={styles.container} >
      <LinearGradient colors={['#153CA7', '#F9F905']} style={styles.background} />
      <Header />
      {
        data ? (
          <ScrollView style={styles.cardContainer}>
            <TouchableOpacity style={styles.card}>
              <View style={styles.line1}>
                {data[0].codigo === 'RO' && (
                  <IconMaterial style={styles.iconCaminho} name="local-shipping" />
                )}
                {data[0].codigo === 'BDE' && data[0].tipo === '01' && (
                  <IconFontAwesome5 style={styles.iconSuccess} name="check-circle" />
                )}
                {data[0].codigo === 'OEC' && data[0].tipo === '01' && (
                  <IconFontAwesome5 style={styles.iconAlert} name="info-circle" />
                )}
                {data[0].codigo === 'BDE' && data[0].tipo === '20' && (
                  <IconFontAwesome5 style={styles.iconSad} name="tired" />
                )}
                {data[0].codigo === 'PAR' && data[0].tipo === '10' && (
                  <IconMaterial style={styles.iconFisc} name="local-police" />
                )}
                {data[0].codigo === 'PAR' && data[0].tipo === '16' && (
                  <IconFontAwesome5 style={styles.iconChecking} name="map-marker-alt" />
                )}
                {data[0].codigo === 'PO' && data[0].tipo === '01' && (
                  <IconMaterial style={styles.iconPost} name="airplanemode-on" />
                )}
                <Text style={styles.descricao} numberOfLines={1} >
                  {data[0].descricao}
                </Text>
              </View>
              <View style={styles.line2}>
                <Text style={styles.codigo} >
                  {cod}
                </Text>
                <Text style={styles.data} >
                  {data[0].dtHrCriado}
                </Text>
              </View>
            </TouchableOpacity>
          </ScrollView>

        ) : (<View><Text>Homess</Text></View>)
      }
      <Footer navigation={navigation} />
    </SafeAreaView>
  );
}




