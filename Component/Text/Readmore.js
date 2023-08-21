import React, { useState } from "react";
import { StyleSheet, View, Text, Image, Button, TouchableOpacity } from "react-native";

function App({navigation}) {
  const [line, setLines] = useState(1);

  return (
    <View style={styles.container}>
      <Text style={{fontWeight:"bold", marginBottom:50, fontSize:20,  }}> Readmore  </Text>
      {line === 0 ? (
        <Text>
          Display a long paragraph of text inside a Text component. Implement
          truncation so that only a fixed number of characters are visible
          initially. Add a "Read More" button that expands the text when
          clicked.
        </Text>
      ) : (
        <View>
          <Text numberOfLines={1} style={{ width: 100 }}>
            {" "}
            Display a long paragraph of text inside a Text component. Implement
            truncation so that only a fixed number of characters are visible
            initially. Add a "Read More" button that expands the text when
            clicked.
          </Text>
        </View>
      )}
      <Button
        title={line ? "read more" : "read less"}
        onPress={() => (line ? setLines(0) : setLines(1))}
      />
       <TouchableOpacity  style={{backgroundColor:"green", marginTop:20, height:40, width:200, borderRadius:20}} 
       onPress={() => navigation.navigate('Wraps')}><Text style={{marginTop:10, marginLeft:35, color:"#FFF"}}>Go to Wraps Page</Text></TouchableOpacity>
   
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
  overFlowText: {
    lineHeight: 3,
  },
});
export default App;
