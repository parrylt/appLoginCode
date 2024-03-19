import React, { useEffect } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Firebase from "../firebase";

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [user, setUser] = useState(null);
  const [initializing, setInitializing] = useState(true);

  function Dados(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  function handleLogin() {
    Firebase.auth()
      .signInWithEmailAndPassword(email, senha)
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorCode + ' ' + errorMessage);
      });
  }

useEffect(() => {
  Firebase.auth().onAuthStateChanged(function (user) {
    setUser(user);
    if (initializing) setInitializing(false);
    //alert("Let's gooo");
  });
}, [initializing]); 

  if (user) {
    // alert("Acesso Liberado" + user.uid);
    return navigation.navigate('Rotas');
  } else {
    // alert("Não permitido");
    // console.log('não tá legal');
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../assets/fundo.gif')}
        style={styles.backgroundImage}
      />

      <Text style={styles.textoEntrada}>Agenda de Contatos</Text>

      <TextInput
        placeholderTextColor={'#fff'}
        style={styles.textoInput}
        placeholder="E-mail"
        onChangeText={(email) => setEmail(email)}
        value={email}
      />

      <TextInput
        secureTextEntry={true}
        placeholderTextColor={'#fff'}
        style={styles.textoInput}
        placeholder="Senha"
        onChangeText={(senha) => setSenha(senha)}
        value={senha}
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={() => {
          handleLogin();
        }}>
        <Text style={styles.textoBotao}> Login </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
    padding: 8,
  },
  backgroundImage: {
    flex: 1,
    position: 'absolute',
    width: '104%',
    height: '103%',
    zIndex: -1,
  },
  textoEntrada: {
    marginTop: 55,
    marginBottom: 305,
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    padding: 14,
    backgroundColor: 'purple',
    borderRadius: 40,
  },
  textoInput: {
    width: 250,
    paddingLeft: 10,
    backgroundColor: 'purple',
    color: '#fff',
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    borderRadius: 10,
    textAlign: 'center',
  },
  botao: {
    width: 200,
    backgroundColor: 'purple',
    height: 40,
    marginTop: 35,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoBotao: {
    fontSize: 30,
    color: '#51E9ED',
    fontWeight: 'bold',
  },
});