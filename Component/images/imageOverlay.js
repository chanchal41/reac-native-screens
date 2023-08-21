import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Button,
  ActivityIndicator,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

function App({navigation}) {
  return (
    <View style={styles.container}>
          <Text style={{fontWeight:"bold", marginTop:10, fontSize:20,}}>image Overlay</Text>
        
      <View style={{marginTop:10}}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1500622944204-b135684e99fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1461&q=80",
          }}
          style={{
            height: 500,
            width: 500,
            position: "absolute",
          }}
        />
        <Text
          style={{
            marginTop: 400,
            position: "relative",
            fontSize: 60,
            fontWeight: "bold",
            marginLeft: 30,
            color: "#FFF",
          }}
        >
          Nature
        </Text>
        <View
          style={{
            position: "absolute",
            backgroundColor: "#FFF",
            borderRadius: 50,
            height: 40,
            width: 40,
            // marginLeft: 300,
            right: 40,
            top: 50,
          }}
        >
          <Icon
            name="heart"
            size={30}
            color="#900"
            light
            style={{ marginLeft: 5, marginTop: 5 }}
          />
        </View>
      </View>
      <View style={{alignItems:"center"}}>
      <TouchableOpacity style={{backgroundColor:"green", marginTop:20, height:40, width:200, borderRadius:20}} 
       onPress={() => navigation.navigate('Card')}><Text style={{marginTop:10, marginLeft:45, color:"#FFF"}} >Go to Card Page</Text></TouchableOpacity>
   </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "orange",
    flex: 1,
  },
});
export default App;
