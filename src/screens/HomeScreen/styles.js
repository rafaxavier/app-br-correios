import { View, StyleSheet, Image, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  cardContainer: {
    top:100,
    marginBottom:200,
    alignSelf:'center'
  },
  card: {
    // Width:390,
    height:80,
    padding:5,
    margin:5,
    backgroundColor: '#fff',
    borderRadius:12,
  },

  line1:{
    flexDirection:'row',
    // borderWidth:1,
    justifyContent:'flex-start'
  },
  line2:{
    flexDirection:'row',
    // borderWidth:1,
    justifyContent:'space-around'
  },

  // formatacao icones de status
  iconSuccess: {
    width:40,
    fontSize:36, 
    color:'green',
  },

  iconCaminho: {
    width:40,
    fontSize:35, 
    color:'purple',
  },

  iconAlert: {
    width:40,
    fontSize:34, 
    color:'orange',
  },

  iconSad: {
    width:40,
    fontSize:35, 
    color:'red',
  },
  
  iconFisc: {
    width:40,
    fontSize:34, 
    color:'blue',
  },

  iconChecking: {
    width:40,
    fontSize:34, 
    color:'brown',
  },
  iconPost: {
    width:40,
    fontSize:35, 
    color:'#326735',
  },

  descricao:{
    width:310,
    fontSize:17,
    color:'#153CA7',
  },
  codigo:{
    fontSize:14,
    color:'#153CA7',
    fontWeight:'bold',  
  },
  data:{
    fontSize:14,
    color:'#153CA7',  
  },
});