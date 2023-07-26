import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

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

  line: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },

  label: {
    marginHorizontal: 10,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 5,
    marginVertical: 5,
    backgroundColor: '#fff',
    color: 'grey',
  },
  button: {
    backgroundColor: '#1c6cce',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
