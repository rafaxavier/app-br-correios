import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import IconMaterialC from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './styles';

interface FooterProps {
  setSelectedScreen: React.Dispatch<
    React.SetStateAction<'HomeScreen' | 'CalcScreen' | 'GetCepScreen'>
  >;
  selectedScreen: 'HomeScreen' | 'CalcScreen' | 'GetCepScreen';
}

export default function Footer({
  setSelectedScreen,
  selectedScreen,
}: FooterProps) {
  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => setSelectedScreen('HomeScreen')}>
        <IconMaterialC name="package-variant-closed" style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setSelectedScreen('CalcScreen')}>
        <IconMaterialC name="calculator-variant-outline" style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setSelectedScreen('GetCepScreen')}>
        <IconMaterialC name="map-search-outline" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}
