import { StyleSheet,View, Text, Image } from "react-native";
import React from "react";
/**
 * image qui va etre en background qui va representer le bateau de croisière
 * @param {*} param0 
 * @returns 
 */
const BateauPic = ({props}) => {
    //si props est égale à null ou pas definis 
    if (props === null  || props === undefined){
        props = "https://i.pinimg.com/236x/f6/6a/a6/f66aa634f286df41da066fa16eaa5724.jpg"

    }
  return 
  
    <Image source = {{uri: `${props}`}} style={styles.ImageFormat}/>
 
};
const BateauCroisiere = ( {uri, nom}) => {
  return (
    <View style={styles.bateauCroisiereContainer}> 
      <BateauPic props={uri}/>
      <Text>Norway</Text>
    </View>
  );
};

const styles = StyleSheet.create({

    bateauCroisiereContainer: {
        width: 300,
        height:300,
        borderWidth:1,
        borderColor: 'black',
        padding: 20,
        margin: 20
    },

    ImageFormat: {

    }


})

export default BateauCroisiere;
