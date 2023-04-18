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
    height: 70,
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 5,
    backgroundColor: '#fff',
    borderRadius: 12,
  },

  line1: {
    maxWidth: 315,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  line2: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  // formatacao icones de status
  iconSuccess: {
    width: 40,
    fontSize: 36,
    color: 'green',
  },

  iconCaminho: {
    width: 40,
    fontSize: 30,
    color: 'purple',
  },

  iconAlert: {
    width: 40,
    fontSize: 34,
    color: 'orange',
  },

  iconSad: {
    width: 40,
    fontSize: 35,
    color: 'red',
  },

  iconFisc: {
    width: 40,
    fontSize: 34,
    color: 'blue',
  },

  iconChecking: {
    width: 35,
    fontSize: 34,
    color: 'brown',
  },
  iconPost: {
    width: 40,
    fontSize: 35,
    color: '#326735',
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
  data: {
    fontSize: 14,
    color: 'grey',
    fontWeight: '500',
  },

  iconDeletePost: {
    width: 40,
    fontSize: 35,
    color: '#A90000',
  },
});
