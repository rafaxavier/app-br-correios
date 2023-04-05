import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  },

  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  modal: {
    alignItems: 'center',
  },

  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#fff',
  },

  input: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: 20,
    width: 300,
    height: 50,
    backgroundColor: '#fff',
    borderColor: '#153CA7',
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  inputText: {
    fontSize: 18,
    width: '80%',
    fontWeight: '600',
    color: '#153CA7',
  },

  textExemplo: {
    fontWeight: '600',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '80%',
    top: 15,
  },

  btnRed: {
    flex: 1,
    borderRadius: 25,
    height: 50,
    backgroundColor: '#A90000',
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnBlue: {
    flex: 1,
    borderRadius: 25,
    height: 50,
    backgroundColor: '#153CA7',
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textBtn: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
