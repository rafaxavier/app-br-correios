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

  search:{
    marginBottom:50,
  },

  title:{
    fontSize:35, 
    color: '#153CA7',
    alignSelf:'center',
    top:0,
    fontWeight:'bold',
  },

  input: {
    width: 300,
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 3,
    borderColor: '#153CA7',
    borderRadius: 12,
    paddingHorizontal: 15,
    fontSize:20
  },
  icon: {
    position: 'absolute',
    bottom:5,
    color: '#153CA7',
    fontSize:35, 
    right:15
  },

  iconLoading: {
    height:150
  },

  card: {
    borderWidth:1,
    padding:15,
    backgroundColor:'#303B58',
    width:'90%',
    borderRadius:12
  },
  cardError: {
    borderWidth:1,
    padding:15,
    backgroundColor:'#900',
    width:'90%',
    borderRadius:12
  },
  txt:{
    fontSize:20,
    fontStyle:'italic',
    fontWeight:'400',
    color: '#fff',
  },

  
});