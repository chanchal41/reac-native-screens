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

function App({navigation}) {
  return (
    <View style={styles.container}>
          <Text style={{fontWeight:"bold", marginTop:10, fontSize:20,}}>Resize</Text>
      {/* <View>
        <Image
          source={require("./image/pantry.png")}
          style={{
            height: 100,
            width: 100,
          }}
          resizeMode="cover"
        />
      </View> */}

      <View style={{ height: 600, width: 600 }}>
        <Image
          source={{
            uri: "https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-260nw-407021107.jpg",
          }}
          style={{
            height: " 100%",
            width: "100%",
            // resizeMode: "stretch",
            // resizeMode: "contain",
            // resizeMode: "stretch",
            // resizeMode: "repeat",
            // resizeMode: "center",
            objectFit: "scale-down",
          }}
        />

      </View>
      <View style={{alignItems:"center"}}>
      <TouchableOpacity  style={{backgroundColor:"green", marginTop:20, height:40, width:200, borderRadius:20}} 
      onPress={() => navigation.navigate('imageOverlay')}><Text style={{marginTop:10, marginLeft:25, color:"#FFF"}}>Go to imageOverlay Page</Text></TouchableOpacity>
   </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 600,
    width: 600,
    backgroundColor: "orange",
  },
});
export default App;
