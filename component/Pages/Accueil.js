import {StyleSheet,View, Text } from 'react-native'
import React from 'react'
import BateauCroisiere from '../BateauCroisiere'
const Accueil = () => {
  return (
    <View style={styles.container}>
      

      <BateauCroisiere/>

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