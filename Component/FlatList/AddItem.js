import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  ActivityIndicator,
  FlatList,
  CheckBox,
  TouchableOpacity,
} from "react-native";

function App({navigation}) {
  const [isSelect, setSelect] = useState(true);

  const [input, setInput] = useState(false);

  const itemList = [
    {
      id: 1,
      item: "Chokolate",
      isSelect: false,
    },
    {
      id: 2,
      item: "Fruit",
      isSelect: false,
    },
    {
      id: 3,
      item: "Vegitable",
      isSelect: false,
    },
    {
      id: 4,
      item: "Food",
      isSelect: false,
    },
    {
      id: 5,
      item: "Ice Cream",
      isSelect: false,
    },
  ];
  const [list, setList] = useState(itemList);
  const setSelectedIndex = (id) => {
    console.log("hello", id);
    const newItem = list.map((val, index) => {
      if (index == id) {
        return { ...val, isSelect: !val.isSelect };
      } else {
        return val;
      }
    });
    setList(newItem);
    console.log(newItem);
  };

  return (
    <View style={styles.container}>
      <Text style={{fontWeight:"bold", marginTop:10, fontSize:20}}>Add Item</Text>
      <View>
        <FlatList
          data={list}
          renderItem={({ item: list, index }) => (
            <TouchableOpacity onPress={() => setSelectedIndex(index)}>
              <Text
                style={{
                  backgroundColor: list.isSelect ? "lightgreen" : "blue",
                  color: "#FFF",
                  padding: 20,
                  marginVertical: 8,
                  marginHorizontal: 16,
                }}
              >
                {list.id}
                {list.item}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
     
      {/* <Button
        title="Click me"
        onPress={() => {
          setInput(!input);
        }}
      ></Button> */}
      <TouchableOpacity style={{backgroundColor:"green", marginTop:20, height:40, width:200, borderRadius:20}}  onPress={() => navigation.navigate('InfiniteScrolling')}><Text style={{marginTop:10, marginLeft:15, color:"#FFF"}}>Go to InfiniteScrolling Page</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  
    alignItems: "center",
    flex: 1,
  },
});
export default App;
