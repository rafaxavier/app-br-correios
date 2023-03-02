import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconMaterialC from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Footer({ navigation }) {

  return (
    <View style={styles.topo}>
      <Text style={styles.title}>Ratreio de Objetos</Text>
      <TouchableOpacity>
        <IconFontAwesome5 style={styles.iconAdd} name="plus-circle" />
      </TouchableOpacity>
    </View>
  );
}




