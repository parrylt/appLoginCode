import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './home';
import CadastroDiario from './CadastrarDiario';
import AlterarDiario from './AlterarDiario';

const Stack = createStackNavigator();

export default function RotasApp(){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{headerTintColor:'#9ac234'}}
                />
                <Stack.Screen
                name="CadastroDiario"
                component={CadastroDiario}
                options={{headerTintColor: '#9ac234', title: 'Cadastro do dia'}}
                />
                <Stack.Screen
                name="AlterarDiario"
                component={AlterarDiario}
                options={{headerTintColor: '#9ac234', title: 'Alterar registros'}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}