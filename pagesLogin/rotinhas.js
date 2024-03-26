import { createStackNavigator } from '@react-navigation/stack';

import Login from './login';
import Home from '../pages/home';
import Cadastro from './cadastro'


const Stack = createStackNavigator();

export default function Rotas (){
    return(
        <Stack.Navigator>
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Cadastro' component={Cadastro} />
        </Stack.Navigator>
    );
}