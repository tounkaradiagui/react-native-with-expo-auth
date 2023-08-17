import { StyleSheet, SafeAreaView, TouchableOpacity, Text, View, ImageBackground, Dimensions } from 'react-native'
import React from 'react'
import Spacing from '../constants/Spacing'
import FontSize from '../constants/FontSize'
import Colors from '../constants/Colors'
import { useNavigation } from '@react-navigation/native'

const {height} = Dimensions.get('window');

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View
      style={{
        paddingTop: Spacing*3
      }}
      >
        
        <ImageBackground
            style={{
                height: height/2.5
            }}
            resizeMode='contain'
            source={require('../assets/images/welcomeimg.png')}/>
      </View>
      <View 
        style={{
            paddingHorizontal:Spacing * 4,
            paddingTop:Spacing * 4
      }}>
        <Text style={{
          fontSize:FontSize.xxLarge,
          color:Colors.primary,
          fontWeight:"bold",
          textAlign:"center"
        }}
        >Bienvenue dans l'application mobile Mes Finances
        </Text>

        <Text style={{
          fontSize:FontSize.small,
          color:Colors.text,
          fontWeight: "500",
          textAlign:"center",
          marginTop: Spacing * 3
        }}
        >Gérer facilement vos Dépenses avec l'application mobile Mes Finances
        </Text>
      </View>
      <View style={{
        paddingHorizontal: Spacing * 2,
        paddingVertical: Spacing * 6,
        flexDirection:'row',
        justifyContent: "space-between"
      }}>
        <TouchableOpacity
          style={{
            backgroundColor:'#1F41BB',
            borderRadius: Spacing,
            paddingVertical: Spacing * 1.5,
            paddingHorizontal: Spacing * 2.5,
            width:"48%",
            shadowColor:Colors.primary,
            shadowOffset:{
              width:0,
              height:Spacing
            },
            shadowOpacity:0.3,
            shadowRadius:Spacing,
          }}
          onPress={() => navigation.navigate("Login")}
          >
          <Text
          style={{
            fontWeight:"bold",
            color:Colors.onPrimary,
            fontSize:FontSize.medium,
            textAlign:"center"
          }}
            >Connexion</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderRadius: Spacing,
            paddingVertical: Spacing * 1.5,
            paddingHorizontal: Spacing * 2.5,
            width:"48%",
            borderWidth: 3,
            borderColor:"#1F41BB",
            
          }}
          onPress={() => navigation.navigate("Register")}
          >
          <Text
          style={{
            fontWeight:"bold",
            color:Colors.text,
            fontSize:FontSize.medium,
            textAlign:"center",
          }}
            >S'inscrire</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({})