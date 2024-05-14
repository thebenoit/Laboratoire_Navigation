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
 
    return( <Image source = {{uri: `${props}`}} style={styles.ImageFormat}/>)
   
 
};
const BateauCroisiere = ( {uri, nom}) => {
  return (
    <View style={styles.bateauCroisiereContainer}> 
      <BateauPic props={uri}/>
      <Text style={styles.textStyle}>Norway</Text>
    </View>
  );
};

const styles = StyleSheet.create({

    bateauCroisiereContainer: {
        width: 300,
        height: 350,
        
        borderRadius: 20,
        shadowColor: 'black',   // Adjust the shadow color as needed
        shadowOffset: { width: 0, height: 6 },  // X, Y offset of the shadow
        shadowOpacity: 0.17,  // Opacity of the shadow
        shadowRadius: 20,  // Blur radius of the shadow
        margin: 20
    },
    

    ImageFormat: {
        width:'%100',
        height:'100%',
        borderRadius: 20,


    },

    textStyle: {

    }


})

export default BateauCroisiere;
