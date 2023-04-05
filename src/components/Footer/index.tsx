import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { TouchableOpacity, View } from 'react-native';
import IconMaterialC from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './styles';

type RootStackParamList = {
  HomeScreen: undefined;
  CalcScreen: undefined;
  GetCepScreen: undefined;
};

type NavigationProps = StackNavigationProp<RootStackParamList>;

interface FooterProps {
  navigation: NavigationProps;
}

export default function Footer({ navigation }: FooterProps) {
  const navigateToScreen = (screen: keyof RootStackParamList) => () => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={navigateToScreen('HomeScreen')}>
        <IconMaterialC name="package-variant-closed" style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToScreen('CalcScreen')}>
        <IconMaterialC name="calculator-variant-outline" style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToScreen('GetCepScreen')}>
        <IconMaterialC name="map-search-outline" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}
