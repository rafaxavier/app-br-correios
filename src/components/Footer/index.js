import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import IconMaterialC from 'react-native-vector-icons/MaterialCommunityIcons';
export default function Footer({ navigation }) {

  async function navigationHome() {
    navigation.navigate('HomeScreen');
  }

  async function navigationCalcularFrete() {
    navigation.navigate('CalcScreen');
  }

  async function navigationGetCep() {
    navigation.navigate('GetCepScreen');
  }

  return (
    <View style={styles.footer} >
      <TouchableOpacity onPress={navigationHome}>
        <IconMaterialC style={styles.icon} name="package-variant-closed" />
      </TouchableOpacity>
      <TouchableOpacity onPress={navigationCalcularFrete}>
        <IconMaterialC style={styles.icon} name="calculator-variant-outline" />
      </TouchableOpacity>
      <TouchableOpacity onPress={navigationGetCep}>
        <IconMaterialC style={styles.icon} name="map-search-outline" />
      </TouchableOpacity>
    </View>
  );
}




