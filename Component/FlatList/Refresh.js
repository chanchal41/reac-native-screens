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
  RefreshControl,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";

function App({navigation}) {
  const [user, setUser] = useState();
  const [refreshing, setRefreshing] = React.useState(false);

  useEffect(() => {
    onRefresh();
  }, []);

  const onRefresh = () => {
    fetch("https://api.slingacademy.com/v1/sample-data/photos")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data.photos);
        setUser(data.photos);
        setRefreshing(true);
        setTimeout(() => {
          setRefreshing(false);
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollText}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Text style={{fontWeight:"bold", marginTop:10, fontSize:20,}}>Refresh page</Text>
        <FlatList
          data={user}
          renderItem={({ item }) => {
            return (
              <View>
                <Text
                  style={{
                    backgroundColor: "yellow",
                    padding: 20,
                    marginHorizontal: 8,
                    marginVertical: 16,
                  }}
                >
                  {item.title}
                </Text>
              </View>
            );
          }}
        />
      </ScrollView>
      <View style={{alignItems:"center"}}>
      <TouchableOpacity  style={{backgroundColor:"green", marginTop:20, height:40, width:200, borderRadius:20}}  
      onPress={() => navigation.navigate('imageApi')}><Text style={{marginTop:10, marginLeft:35, color:"#FFF"}}  >Go to imageApi Page</Text></TouchableOpacity>
          </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollText: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "pink",
    justifyContent: "center",
  },
});
export default App;
