import React, { useState } from "react";
import {SafeAreaView,StyleSheet,View,Text,Image,TouchableOpacity,Button, TextInput} from "react-native";

function App({navigation}) {

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
 

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const addList = {
      id:new Date().getTime(),
      text:input
    }
     setTodos([...todos].concat(addList))
     console.log(addList)
   setInput("");
  }

  return (
    <View style={styles.container}>
   <Text style={{fontWeight:"bold", marginBottom:50, fontSize:20,  }}> Dynamic Text  </Text>

<View >
     <TextInput value={input} onChangeText={(e)=> setInput(e)} placeholder="Enter input text" style={{padding:20, marginBottom:20}} />
     <Button title="Add" onPress={onSubmitHandler} >Add</Button>
     </View>
{todos.map((todo) => (
          <Text key={todo.id}>
           <Text>{todo.text}</Text>
          </Text> 
        ))}
     

     <TouchableOpacity style={{backgroundColor:"green", marginTop:20, height:40, width:200, borderRadius:20}} 
      onPress={() => navigation.navigate('Readmore')}><Text style={{marginTop:10, marginLeft:25, color:"#FFF"}}>Go to Readmore Page</Text></TouchableOpacity>
   

 </View>
  );
};


const styles = StyleSheet.create({
  container: {
  alignContent:"center",
  alignItems:"center",
marginTop:100,
 flex:1

  }
});
export default App;