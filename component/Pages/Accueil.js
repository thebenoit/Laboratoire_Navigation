import {StyleSheet,View, Text } from 'react-native'
import React from 'react'
import BateauCroisiere from '../BateauCroisiere'

const Accueil = () => {
  image = 'https://i.pinimg.com/236x/c2/92/a0/c292a0cc664f3966d5f85a97e8708107.jpg'
  return (
    <View style={styles.container}>      
      <BateauCroisiere uri={image}/>

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