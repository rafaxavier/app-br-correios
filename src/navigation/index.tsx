import {
  createAppContainer,
  createSwitchNavigator,
  NavigationContainer,
} from 'react-navigation';
import GetCepScreen from '../screens/GetCepScreen';
import CalcScreen from '../screens/CalcScreen';
import HomeScreen from '../screens/HomeScreen';

const AppContainer: NavigationContainer = createAppContainer(
  createSwitchNavigator({
    HomeScreen, // primeira pg ser carregada
    CalcScreen,
    GetCepScreen,
  }),
);

export default AppContainer;
