import {
    Text,
    View,
    StyleSheet,
    Image,
    ScrollView,
  } from 'react-native';
  import React, { useEffect } from 'react';

  
  export default function Ignorados() {
  
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Otários que eu deveria ignorar</Text>
  
        <ScrollView>
          



        </ScrollView>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0066cc',
    },
  
    titulo: {
      color: '#000',
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 40,
      margin: 15,
    },
    texto: {
      color: '#000',
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'justify',
      marginTop: 150,
      marginBottom: 50,
      margin: 35,
    },
});