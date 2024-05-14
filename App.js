import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import voyages from './trips.json'
import Accueil from './component/Pages/Accueil'


const Tab = createBottomTabNavigator();

//const Accueil = ({navigation}) => <View><Text>Accueil</Text></View>
const Recherche = () => <View><Text>Recherche</Text></View>
const Croisiere = () => <View><Text>Croisière</Text></View>
export default function App() {

  const SIZE_ICON = 30;
  //const COLOR_ICON = focused ? "black" : "blue";

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Accueil">
        <Tab.Screen name="Accueil" component={Accueil}
        options={{tabBarIcon: ({size,focused,color}) => 
          <Ionicons name="home" size={SIZE_ICON} 
          color={focused ? "blue" : "#ADD8E6"}/>}}
        />
        <Tab.Screen name="Recherche" component={Recherche}
        options={{tabBarIcon: ({size,focused,color}) => 
        <AntDesign name="search1" size={SIZE_ICON} 
        color={focused ? "blue" : "#ADD8E6"}/>}}
        />
        <Tab.Screen name="Croisière" component={Croisiere}
        options={{tabBarIcon: ({size,focused,color}) => 
        <FontAwesome6 name="sailboat" size={SIZE_ICON} 
         color={focused ? "blue" : "#ADD8E6"}/>}}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
