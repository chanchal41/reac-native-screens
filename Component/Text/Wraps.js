import React, { useState } from "react";
import { StyleSheet, View, Text, Image, Button } from "react-native";
import { Card } from "react-native-elements";

function App() {
  return (
    <View style={styles.container}>
          <Text style={{fontWeight:"bold", fontSize:30,  }}> Wraps  </Text>
      <Card containerStyle={{ width: 500 }}>
        <Text>
          There's more to paragraphing than meets the eye! Become a better
          writer with this guide. Learn how to boost your writing skills with
          proper paragraphing. Check out our blog today! Paraphrase Generator.
          Online Paraphrasing Tool. Best Paraphrasing Tool. Used by Millions
          There's more to paragraphing than meets the eye! Become a better
          writer with this guide. Learn how to boost your writing skills with
          proper paragraphing. Check out our blog today! Paraphrase Generator.
          Online Paraphrasing Tool. Best Paraphrasing Tool. Used by Millions
        </Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    alignItems: "center",

    flex: 1,
    backgroundColor: "#1B98F5",
  },
});
export default App;
