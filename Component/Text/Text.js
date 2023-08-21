import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

function App({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={{fontWeight:"bold", marginBottom:50, fontSize:30,  }}> Text  </Text>
      <Text style={styles.text}>
        <Text style={styles.capitalLatter}>cklccja</Text>
        <Text> orem ipsum dolor sit amet, sed do eiusmod.</Text> <br/>
        
        <Text>
            <Text style={styles.textwayline}> orem ipsum dolor sit amet, sed do eiusmod.</Text> <br/>
          orem ipsum dolor<Text style={styles.boldWord}>minim</Text>eniam, quis
          aliquip ex ea commodo consequat.
        </Text> <br/>
        <Text style={styles.italicText}>
         I AM GREEN TEXT
        </Text><br/>
          <Text style={styles.textunderline}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        </Text><br/>
        <Text style={styles.textShasow}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
               deserunt mollit anim id est laborum</Text>
      </Text>
      <TouchableOpacity   style={{backgroundColor:"green", marginTop:20, height:40, width:200, borderRadius:20}} 
      onPress={() => navigation.navigate('DynamicText')}><Text style={{marginTop:10, marginLeft:25, color:"#FFF"}}>Go to DynamicText Page</Text></TouchableOpacity>
   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    alignItems: "center",
    marginTop: 100,
    flex: 1,
  },
  textunderline:{
    color:"red",
textDecorationLine:"underline",
   
 },
  text: {
    color: "#3944F7",
  },
  capitalLatter: {
    color: "#BF3325",
    fontSize: 20,
    textTransform:"uppercase"
  
  },
  boldWord: {
    fontWeight: "bold",
    color: "blue",
  },
  italicText: {
    fontStyle: "italic",
    color: "#4DD637",
  writingDirection:"rtl"

  },
  textShasow:{
    textShadowColor:"#E83A59",
    textShadowOffset:{width:2, height:2},
    textShadowRadius:5,
      letterSpacing:10,
       
  },
  textwayline:{
  backgroundColor: 'green',
  letterSpacing:10,
  lineHeight :10,
      lineHeight :50
      
      
    
  }
});
export default App;
