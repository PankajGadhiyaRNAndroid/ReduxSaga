import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from '@react-navigation/native';
import { fromRight } from 'react-navigation-transitions';

//  Components 
import Login from './login';
import Register from './register';
import Welcome from './welcome';

const Navigation = createStackNavigator(
    {
        Screenwelcome: {
            screen: Welcome,
        },
        ScreenLogin: {
            screen: Login,
        },
        ScreenRegister: {
            screen: Register,
        },
    },
    {
        initialRouteName: 'Screenwelcome',
        transitionConfig: () => fromRight(350),
    },
);



const AppContainer = createAppContainer(Navigation);

export default AppContainer;