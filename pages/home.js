import {
    View,
    Text,
    SafeAreaView,
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
      Alert.alert("O diario foi deletado.");
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
  
<FlatListdata={diario}
renderItem={({item}) => {
  return(
    <View style={estilo.diario}>
      <TouchableOpacity
  )
}
}
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