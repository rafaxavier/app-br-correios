import React, { useState } from 'react';
import { View } from 'react-native';
import Footer from '../../components/Footer';
import HomeScreen from '../HomeScreen';
import CalcScreen from '../CalcScreen';
import GetCepScreen from '../GetCepScreen';

export default function EncomendasScreen() {
  const [selectedScreen, setSelectedScreen] = useState<
    'HomeScreen' | 'CalcScreen' | 'GetCepScreen'
  >('HomeScreen');

  const renderSelectedScreen = () => {
    switch (selectedScreen) {
      case 'HomeScreen':
        return <HomeScreen />;
      case 'CalcScreen':
        return <CalcScreen />;
      case 'GetCepScreen':
        return <GetCepScreen />;
      default:
        return null;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {renderSelectedScreen()}
      <Footer
        setSelectedScreen={setSelectedScreen}
        selectedScreen={selectedScreen}
      />
    </View>
  );
}
