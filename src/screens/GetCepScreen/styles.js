import { View, StyleSheet, Image, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection:'column',  (default no react-native)
    backgroundColor: '#F9F905',
    // alinha verticalmente
    justifyContent: 'center',
    // alinha horizontalmente
    alignItems: 'center',
      // padding: 15,
    // width: '100%',
  },
  top:{
    position:'absolute',
    top:40,
  },

  title:{
    fontSize:35, 
    color: '#153CA7',
    alignSelf:'center',
    top:0
  },

  input: {
    width: 290,
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 3,
    borderColor: '#153CA7',
    borderRadius: 12,
    paddingHorizontal: 15,
    fontSize:19
  },
  icon: {
    position: 'absolute',
    bottom:5,
    color: '#153CA7',
    fontSize:35, 
    right:15
  },
});