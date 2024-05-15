import {StyleSheet,View, Text } from 'react-native'
import React from 'react'
import BateauCroisiere from '../BateauCroisiere'

const Accueil = () => {
  image = 'https://i.pinimg.com/564x/6a/d1/d4/6ad1d44adc0d5adee46fbb300044e2df.jpg'
  return (
    <View style={styles.container}>      
      <BateauCroisiere uri={image} nom={"Norwegian"}/>

    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    justifyContent: 'center',
    alignItems: 'center'

  }
})

export default Accueil