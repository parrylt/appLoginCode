import { useState, useEffect } from "react";
import { Text, TextInput, View, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";

import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import {ReactNativeAsyncStorage} from '@react-native-async-storage/async-storage';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAbCspt3HsP6PyR5jIegG2S5Y_fzYAYVoM",
    authDomain: "diariobd-ae542.firebaseapp.com",
    projectId: "diariobd-ae542",
    storageBucket: "diariobd-ae542.appspot.com",
    messagingSenderId: "859882068766",
    appId: "1:859882068766:web:4cb61cd0d81479f2abc70f"
  };
  

  const app = initializeApp(firebaseConfig);

  const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });
  
export default function Login({navigation}){

    const [email,setEmail] = useState('');
    const [senha,setSenha] = useState('');
    const [user,setUser] = useState('');
    

    function Login(){
        signInWithEmailAndPassword(auth, email, senha).catch(
            function(error){
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorCode, errorMessage);
            }
        )
        
    }

    useEffect (()=>{
        onAuthStateChanged(auth,function(user){
            setUser(user);
            if(user){
                return navigation.navigate('Home');
            }
            else{}
        });
    },[])

    return(
        <View style={styles.container}>
                      <ImageBackground
          source={require('../assets/fundo.gif')}
          style={styles.backgroundImage}
        />
            <Text style={styles.titulo}>Diário dos Legais e dos Otários que eu deveria ignorar</Text>

            <TextInput 
            style={styles.caixaTexto}
            placeholder="Digite o seu e-mail"
            onChangeText={(email)=>setEmail(email)}
            value={email}
            />

            <TextInput 
            secureTextEntry={true}
            style={styles.caixaTexto}
            placeholder="Digite a sua senha"
            onChangeText={(senha)=>setSenha(senha)}
            value={senha}
            />

            <TouchableOpacity
            style={styles.botao}
            onPress={()=>{
                Login();
            }}
            >
                <Text style={styles.btT}>Logar</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.botaoCad}
            onPress={()=>{
                navigation.navigate('Cadastro');
            }}
            >
                <Text style={styles.botaoTC}>Cadastrar</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    backgroundImage: {
      flex: 1,
      position: 'absolute',
      width: '100%',
      height: '100%',
      zIndex: 0,
    },
    caixaTexto:{
        width: 200,
        backgroundColor: 'yellow',
        color: 'black',
        fontSize: 16,
        marginTop: 20,
        borderRadius: 6
    },
    titulo:{
        fontSize: 35,
        backgroundColor: 'yellow',
    },
    botao: {
        backgroundColor: 'yellow',
        width: 250,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        borderRadius: 10
    },
    btT: {
        fontSize: 20
    },
    botaoCad: {
        backgroundColor: '#yellow',
        width: 151,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        borderRadius: 10
    },
    botaoTC: {
        fontSize: 20,
        color: '#ffffff'
    },
});