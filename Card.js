import React, { useState } from "react";
import {SafeAreaView,StyleSheet,View,Text,Image,ScrollView,Button} from "react-native";


const Card = (props) =>{
  return(
 <View style={styles.container}>
     <Text>hello {props.name}</Text>
        </View>
  );
}


const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    }
});
export default Card;