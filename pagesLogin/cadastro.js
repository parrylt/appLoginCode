import { useState, useEffect } from "react";
import { Text, TextInput, View, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";

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


  const auth = getAuth();
  

export default function Cadastro({navigation}){

    const [email,setEmail] = useState('');
    const [senha,setSenha] = useState('');
    const [user,setUser] = useState('');
    

    function Cadastro(){

        createUserWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });

    }

    useEffect (()=>{
        onAuthStateChanged(auth,function(user){
            setUser(user);
            if(user){
                return navigation.navigate('Login');
            }
            else{}
        });
    },[])


    

    return(
        <View style={styles.container}>
            <ImageBackground
          source={require('../assets/hell.gif')}
          style={styles.backgroundImage}
        />
  
            <Text style={styles.titulo}>Agenda de Contatos{'\n'}Gente Legal e Otários Ignorados</Text>

            <TextInput 
            style={styles.textoInput}
            placeholder="Digite o e-mail"
            onChangeText={(email)=>setEmail(email)}
            value={email}
            />

            <TextInput 
            secureTextEntry={true}
            style={styles.textoInput}
            placeholder="Digite a senha"
            onChangeText={(senha)=>setSenha(senha)}
            value={senha}
            />

            <TouchableOpacity
            style={styles.botao}
            onPress={()=>{
                Cadastro();
            }}
            >
                <Text style={styles.btTxt}>Cadastrar</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.botaV}
            onPress={()=>{
                navigation.navigate('Login');
            }}
            >
                <Text style={styles.botaoTV}>Voltar</Text>
            </TouchableOpacity>

        </View>
    );
}
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center',
    },
    backgroundImage: {
      flex: 1,
      position: 'absolute',
      width: '100%',
      height: '100%',
      zIndex: 0,
    },
    containerTitulo: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: -70,
      height: 50,
      backgroundColor: 'yellow'
    },
    textoInput: {
      backgroundColor: 'yellow',
      height: 50,
    },
    titulo: {
      color: 'white',
      textAlign: 'center',
      fontSize: 30,
      alignItems: 'center',
      zIndex: 2,
    },
    containerTexto: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'yellow',
      position: 'absolute',
      borderRadius: 90,
      height: 90,
      width: 350,
    },
    botao: {
      backgroundColor: '#dcdcdc',
      width: 250,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 50,
      borderRadius: 10
  },
  botaoV: {
      backgroundColor: '#D20103',
      width: 150,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 30,
      borderRadius: 10
  },
  btTxt: {
      fontSize: 20
  },
  botaoTV: {
      fontSize: 20,
      color:'#ffffff'
  },
  });