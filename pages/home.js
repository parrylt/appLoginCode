import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    Image,
    ImageBackground,
  } from 'react-native';
  import React, { useEffect } from 'react';

  
  export default function Home() {

    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={require('../assets/fundoHome.jpg')}
          style={styles.backgroundImage}
        />
  
        <View style={styles.containerTitulo}>
         
          <View style={styles.containerTexto}>
            <Text style={styles.titulo}>Agenda de Contatos{'\n'}Gente Legal e Otários Ignorados</Text>
          </View>
        </View>
  

      </SafeAreaView>
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