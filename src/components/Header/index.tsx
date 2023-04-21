import React, { ReactNode } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

interface HeaderProps {
  title: string;
  leftIcon?: {
    iconComponent: ReactNode;
    onPress: () => void;
  };
  rightIcon?: {
    iconComponent: ReactNode;
    onPress: () => void;
  };
}

export default function Header({ title, leftIcon, rightIcon }: HeaderProps) {
  return (
    <View style={styles.topo}>
      {leftIcon && (
        <TouchableOpacity onPress={leftIcon.onPress}>
          {leftIcon.iconComponent}
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
      {rightIcon && (
        <TouchableOpacity onPress={rightIcon.onPress}>
          {rightIcon.iconComponent}
        </TouchableOpacity>
      )}
    </View>
  );
}

Header.defaultProps = {
  leftIcon: undefined,
  rightIcon: undefined,
};
