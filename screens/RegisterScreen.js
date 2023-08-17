import { TouchableOpacity, SafeAreaView, StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View
        style={{
          paddingTop: 100,
        }}
      >
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize:FontSize.xLarge,
              color:Colors.primary,
              fontWeight: "bold",
              marginVertical: Spacing * 3
            }}
          >Création de votre compte </Text>
          
        </View>
      </View>
      <View>
        <TextInput 
          placeholder="Nom"
          placeholderTextColor={Colors.darkText}
          style={{
            fontSize:FontSize.small,
            marginLeft: 20,
            borderWidth:2,
            borderColor:"#1F41BB",
            maxWidth:"80%",
            padding:Spacing,
            color:Colors.primary,
            fontWeight: "400",
            borderRadius: Spacing,
            backgroundColor: Colors.lightPrimary
          }}
        />
        <TextInput 
          placeholder="Prénom"
          placeholderTextColor={Colors.darkText}
          style={{
            fontSize:FontSize.small,
            marginLeft: 20,
            marginTop:10,
            borderWidth:2,
            borderColor:"#1F41BB",
            maxWidth:"80%",
            padding:Spacing,
            color:Colors.primary,
            fontWeight: "400",
            borderRadius: Spacing,
            backgroundColor: Colors.lightPrimary
          }}
        />
        <TextInput 
          placeholder="Votre adresse email"
          placeholderTextColor={Colors.darkText}
          style={{
            fontSize:FontSize.small,
            marginLeft: 20,
            marginTop:10,
            borderWidth:2,
            borderColor:"#1F41BB",
            maxWidth:"80%",
            padding:Spacing,
            color:Colors.primary,
            fontWeight: "400",
            borderRadius: Spacing,
            backgroundColor: Colors.lightPrimary
          }}
        />
        <TextInput 
          placeholder="Votre mot de passe"
          placeholderTextColor={Colors.darkText}
          secureTextEntry
          style={{
            fontSize:FontSize.small,
            marginLeft: 20,
            marginTop:10,
            borderWidth:2,
            borderColor:"#1F41BB",
            maxWidth:"80%",
            padding:Spacing,
            color:Colors.primary,
            fontWeight: "400",
            borderRadius: Spacing,
            backgroundColor: Colors.lightPrimary
          }}
        />

        <TextInput 
          placeholder="Confirmer le mot de passe"
          placeholderTextColor={Colors.darkText}
          secureTextEntry
          style={{
            fontSize:FontSize.small,
            marginTop:10,
            marginLeft: 20,
            borderWidth:2,
            borderColor:"#1F41BB",
            maxWidth:"80%",
            padding:Spacing,
            color:Colors.primary,
            fontWeight: "400",
            borderRadius: Spacing,
            backgroundColor: Colors.lightPrimary
          }}
        />
      </View>
      <View>
        
        <TouchableOpacity
          style={{
            backgroundColor:'#1F41BB',
            borderRadius: Spacing,
            padding: Spacing * 1.5,
            maxWidth:"80%",
            marginTop:30,
            marginLeft: 20,
          }}
          // onPress={() =>! navigation.navigate("Login")}
          >
          <Text
          style={{
            fontWeight:"bold",
            color:Colors.onPrimary,
            fontSize:FontSize.medium,
            textAlign:"center"
          }}
            >Poursuivre</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            borderRadius: Spacing,
            padding: Spacing * 1.5,
            maxWidth:"80%",
            marginTop:10,
            marginLeft: 20,
          }}
          onPress={() => navigation.navigate("Login")}
          >
          <Text
            style={{
              fontWeight:"bold",
              color:Colors.text,
              fontSize:FontSize.small,
              textAlign:"center"
            }}
            >Déjà utilisateur ? Connexion
          </Text>
        </TouchableOpacity>
        
      </View>
    </SafeAreaView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({})