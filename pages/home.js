import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    FlatList,
    TouchableOpacity,
    Alert
  } from 'react-native';
  import React, { useState, useEffect } from 'react';
  import Firebase from './Firebase';
  import {MaterialCommunityIcons} from '@expo/vector-icons';

  
  export default function Home({navigation}) {

    const [diario, setDiario] = useState([]);

    function deleteDiario (id){
      Firebase.collection ("diario").doc(id).delete();
      Alert.alert("O registro foi deletado.");
    }

    useEffect (()=>{
      Firebase.collection("diario").onSnapshot ((query) =>{
        const lista =[];
        query.forEach((doc) =>{
          lista.push({...doc.data(),id: doc.id});
        });
        setDiario(lista);
      });
    },[]);

    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/fundoHome.jpg')}
          style={styles.backgroundImage}
        />
  
        <View style={styles.containerTitulo}>
          <View style={styles.containerTexto}>
            <Text style={styles.titulo}>Agenda de Contatos Gente Legal e Otários Ignorados</Text>
          </View>
        </View>
  
<FlatList
data={diario}
renderItem={({item}) => {
  return(
    <View style={estilo.diario}>

      <TouchableOpacity onPress={()=>navigation.navigate("AlterarDiario",{
        id: item.id,
        titulo: item.titulo,
        texto: item.texto,
        data: item.data,
        local: item.local
      })}>

      <View style={estilo.itens}>
        <Text style={estilo.titulobanda}> Artista/Banda: <Text style={estilo.textobanda}>{item.artistabanda}
        </Text></Text><Text style={estilo.titulobanda}> Gênero: <Text style={estilo.textobanda}>{item.genero}
        </Text></Text>
        <Text style={estilo.titulobanda}> Música: <Text style={estilo.textobanda}>{item.musica}
        </Text></Text>
      </View>
      </TouchableOpacity>

      <View style={estilo.botaodeletar}>
        <TouchableOpacity onPress={()=>{deleteDiario(item.id)}}>
          <MaterialCommunityIcons name="delete-empty" size={70} color="red" />
        </TouchableOpacity>
      
      </View>
      </View>
  );
}}
/>

<TouchableOpacity style={estilo.addbutton} onPress={()=> navigation.navigate("CadastrarDiario")}>
  <MaterialCommunityIcons name="plus-circle-outline" size={70} color="green" />
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
      height: 50
    },
    titulo: {
      color: 'white',
      textAlign: 'center',
      fontSize: 30,
      alignItems: 'center',
      zIndex: 2,
      height: 200
    },
    itens:{
      marginHorizontal: 10,
      marginVertical: 10,
      padding: 10,
    },
    titulobanda:{
      fontSize: 13,
      color: '#fff'
    },
    textobanda:{
      fontSize: 15,
      fontWeight: 'bold'
    },
    musicas: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 10,
      marginVertical: 10,
      padding: 10,
      backgroundColor: '#0000CD',
      borderRadius: 10
    },
    botaodeletar:{
      textAlignVertical: 'center',
      marginVertical: 10,
    },
    addbutton: {
      backgroundColor: '#ffffff',
      borderRadius: 50,
      position: 'absolute',
      left: 20,
      bottom: 40,
      justifyContent: 'center',
      alignItems: 'center'
    },
    containerTexto: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',  
      position: 'absolute',
      borderRadius: 90,
      height: 90,
      width: 350,
    },
  });
