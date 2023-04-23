import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  cardContainer: {
    width: '100%',
    top: 40,
    marginBottom: 50,
  },
  card: {
    height: 'auto',
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 5,
    backgroundColor: '#fff',
    borderRadius: 12,
  },

  cardHead: {
    maxWidth: 315,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  cardBody: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  detalhe: {
    padding: 7,
    margin: 5,
    backgroundColor: '#fafaa0',
    // flexDirection: 'row',
    // justifyContent: 'space-around',
    // justifyItems: 'center',
    // alignContent: 'center',
    // alignItems: 'center',
    // alignSelf: 'flex-end',
  },

  // formatacao icones de status
  iconSuccess: {
    width: 42,
    fontSize: 30,
    color: 'green',
  },

  iconCaminho: {
    width: 42,
    fontSize: 30,
    color: '#3B218D',
  },
  iconCaminho2: {
    width: 35,
    fontSize: 25,
    color: '#009899',
  },
  iconAlert: {
    width: 42,
    fontSize: 30,
    color: 'orange',
  },

  iconSad: {
    width: 42,
    fontSize: 30,
    color: '#c00000',
  },

  iconFisc: {
    width: 42,
    fontSize: 30,
    color: '#1E28AC',
  },

  iconChecking: {
    width: 42,
    fontSize: 30,
    color: '#0D4D4D',
  },
  iconPost: {
    width: 42,
    fontSize: 30,
    color: '#805B15',
  },

  descricao: {
    maxWidth: 300,
    marginTop: 8,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#153CA7',
  },
  codigo: {
    fontSize: 14,
    color: 'grey',
    fontWeight: '500',
  },
  text: {
    fontSize: 14,
    color: 'grey',
    fontWeight: '500',
  },
});
