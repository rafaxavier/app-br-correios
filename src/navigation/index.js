import { createAppContainer, createSwitchNavigator} from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import CalcScreen from '../screens/CalcScreen';
import GetCepScreen from '../screens/GetCepScreen';

export default createAppContainer(
    createSwitchNavigator({
        HomeScreen, //primeira pg ser carregada
        CalcScreen,
        GetCepScreen
    })
);