import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StackNavigationProp } from '@react-navigation/stack';
import Footer from '../../components/Footer';
import { styles } from './styles';

type RootStackParamList = {
  HomeScreen: undefined;
  CalcScreen: undefined;
  GetCepScreen: undefined;
};

type NavigationProps = StackNavigationProp<RootStackParamList>;

interface CalcScreenProps {
  navigation: NavigationProps;
}

export default function CalcScreen({ navigation }: CalcScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#153CA7', '#F9F905']}
        style={styles.background}
      />
      <View>
        <Text style={styles.title}>Calcular frete</Text>
      </View>
      <Footer navigation={navigation} />
    </SafeAreaView>
  );
}
