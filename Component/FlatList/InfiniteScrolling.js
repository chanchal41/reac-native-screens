import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ActivityIndicator,
  StatusBar,
  TouchableOpacity
} from "react-native";
import axios from "axios";
const App = ({navigation}) => {
  const [user, setUser] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getApi();
  }, [currentPage]);
  const getApi = () => {
    setIsLoading(true);
    axios
      .get(`https://api.slingacademy.com/v1/sample-data/photos`)
      .then((resp) => {
        setUser([...user, ...resp.data.photos]);
        setIsLoading(false);
        console.log(resp.data.photos);
      });
  };

  const renderLoader = () => {
    return isLoading ? (
      <View style={styles.loaderStyle}>
        <ActivityIndicator size="large" color="red" />
      </View>
    ) : null;
  };
  const loadMoreItem = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <View style={styles.contentWrapperStyle}>
      <Text style={{fontWeight:"bold", marginTop:10, fontSize:20,}}>Infinite Scrolling</Text>

        <FlatList
          data={user}
          renderItem={({ item, id }) => {
            return (
              <View >
                
                <Text style={{fontWeight:"bold", color:"#758283", marginTop:10, fontSize:18}}>{` ${item.id},${item.title}, ${item.description}`}</Text>
               
              </View>
            );
          }}
          keyExtractor={(item) => item.id}
          ListFooterComponent={renderLoader}
          onEndReached={loadMoreItem}
          onEndReachedThreshold={0}
        />
         
      </View>
      <View style={{alignItems:"center"}}>
      <TouchableOpacity style={{backgroundColor:"green", marginTop:20, height:40, width:200, borderRadius:20}}  onPress={() => navigation.navigate('Refresh')}><Text style={{marginTop:10, marginLeft:35, color:"#FFF"}}>Go to Refresh Page</Text></TouchableOpacity>
   
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  contentWrapperStyle: {
   marginTop:20,
   alignItems:"center",
    justifyContent: "center",
  },

  loaderStyle: {
    marginVertical: 16,
    alignItems: "center",
  },
});

export default App;
