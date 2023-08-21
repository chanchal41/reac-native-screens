import React, { useState } from "react";
import {SafeAreaView,StyleSheet,View,Text,ScrollView, Image,TouchableOpacity} from "react-native";
import { Card } from 'react-native-elements';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';


function App({navigation}) {


  return (
    <View style={styles.container}>
    <View style={{alignItems:"center", justifyContent:"center"}}>  <Text style={{fontWeight:"bold", marginTop:10, fontSize:20,  }}>Card  </Text></View>
      
    <View >

     <Card  containerStyle={styles.card} >
      <View style={{flexDirection:"row", flex:1}}>
               <Image
              // source={require("./image/fruit.png")}
              source={require("../../image/fruit.png")}
              style={{
                height: 30,
                width: 30,
                borderRadius:30,
             }}/>
<Card.Title> Fruit & Vegitables</Card.Title>
</View>
     </Card>
      <Card  containerStyle={styles.card} >
        <View style={{flexDirection:"row"}}>
        <Image
              source={require("../../image/bakery.png")}
              style={{
                height: 30,
                width: 30,
                borderRadius:30,
                 }}
            />
          
      <Card.Title >Bakery</Card.Title>
        </View>
      </Card>
      <Card containerStyle={styles.card} >
        <View style={{flexDirection:"row"}}>
        <Image
              source={require("../../image/meat.png")}
              style={{
                height: 30,
                width: 30,
                borderRadius:30,
              }}
            />
      <Card.Title>Meat & Poultry</Card.Title>
      </View>
      </Card>
      <Card containerStyle={styles.card}> 
      <View style={{flexDirection:"row"}}>
      <Image
              source={require("../../image/eggs.png")}
              style={{
                height: 30,
                width: 30,
                borderRadius:30,
             }}
            />
      <Card.Title>Diary & Eggs</Card.Title>
      </View>
      </Card>
      <Card containerStyle={styles.card}>
        <View style={{flexDirection:"row"}}>
        <Image
              source={require("../../image/pantry.png")}
              style={{
                height: 30,
                width: 30,
                borderRadius:30,
              
              }}
            />
      <Card.Title>Pantry</Card.Title>
      </View>
      </Card>
   
    </View>
    <View style={{alignItems:"center"}}>
    <TouchableOpacity style={{backgroundColor:"green", marginTop:20, height:40, width:200, borderRadius:20}} 
     onPress={() => navigation.navigate('Flexbox')}><Text  style={{marginTop:10, marginLeft:45, color:"#FFF"}}>Go to Flexbox Page</Text></TouchableOpacity>
   </View>
        </View>
  );
};


const styles = StyleSheet.create({
  container: {
 flex:1
    },

  card:{
borderWidth:10, 
borderRadius:50, 
alignItems:'center'
  },

});
export default App;