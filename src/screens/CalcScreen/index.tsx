import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  View, Image, Text, TextInput, TouchableOpacity, SafeAreaView,
} from 'react-native';
// import IconMaterial from 'react-native-vector-icons/MaterialIcons';
// import IconMaterialC from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';
import Footer from '../../components/Footer';
import { styles } from './styles';

export default function CalcScreen({ navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#153CA7', '#F9F905']} style={styles.background} />
      <View>
        <Text style={styles.title}>Calcular frete</Text>
      </View>
      <Footer navigation={navigation} />
    </SafeAreaView>
  );
}
