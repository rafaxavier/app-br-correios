import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../../components/Header';
import { styles } from './styles';

export default function LojasScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#153CA7', '#F9F905']}
        style={styles.background}
      />
      <View style={{ marginTop: 10, marginBottom: 15 }}>
        <Header title="Lojas" />
      </View>
      <View
        style={{
          marginTop: 250,
          marginBottom: 15,
        }}
      >
        <Header title="EM BREVE LOJAS!!!" />
      </View>
    </SafeAreaView>
  );
}
