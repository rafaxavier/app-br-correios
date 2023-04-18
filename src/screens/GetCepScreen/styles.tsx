import { StyleSheet } from 'react-native';

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

  search: {
    position: 'absolute',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingTop: 20,
    top: 0,
    left: 0,
    right: 0,
    height: 90,
  },

  title: {
    fontSize: 25,
    color: '#fff',
    alignSelf: 'center',
    top: 45,
    fontWeight: '600',
  },

  input: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: 100,
    width: 300,
    height: 50,
    backgroundColor: '#fff',
    borderColor: '#153CA7',
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 60,
  },
  inputText: {
    fontSize: 18,
    width: '80%',
    fontWeight: '600',
    color: '#153CA7',
  },
  icon: {
    color: '#153CA7',
    fontSize: 45,
    margin: 2,
  },

  containerLoading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconLoading: {
    height: 150,
  },

  card: {
    top: 200,
    marginBottom: 200,
    alignSelf: 'center',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
  },
  cardError: {
    position: 'absolute',
    alignItems: 'center',
    borderWidth: 1,
    margin: 20,
    marginTop: 25,
    padding: 15,
    backgroundColor: '#900',
    borderRadius: 12,
  },
  txt: {
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: '600',
    color: '#153CA7',
  },
});
