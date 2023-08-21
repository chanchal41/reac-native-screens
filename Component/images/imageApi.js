import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from "react-native";

function App({navigation}) {
  const [images, setImages] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    getApi();
  }, []);

  const onLoading = (value, label) => {
    setLoader(value);
  };

  const getApi = async () => {
    fetch("https://api.slingacademy.com/v1/sample-data/photos")
      .then((resp) => resp.json())
      .then((data) => {
        setImages(data.photos);

        // return data.photos;
        setTimeout(() => {
          setLoader(false);
        }, 2000);

        console.log(data.photos, "helllo");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View>
    <View style={styles.container}>
    <Text style={{fontWeight:"bold", marginTop:10, fontSize:20,}}>Image Api</Text>
      {loader ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <View>
          <FlatList
            data={images}
            renderItem={({ item, index }) => {
              console.log("££££", item);
              return (
                <View>
                  <Image
                    key={index}
                    source={{ uri: item.url }}
                    resizeMode="contain"
                    style={{
                      height: 200,
                      width: 200,

                      // height: "100%",
                      // width: "100%",
                    }}
                  />
                </View>
              );
            }}
          />
        </View>
      )}
      {/* 
      {images.map((item, i) => {
        return (
          <Image
            key={i}
            source={item.url}
            onLoadStart={() => setLoader({ loading: true })}
            style={{
              height: "100%",
              width: "100%",
            }}
          />
        );
      })} */}
        
    </View>
    <View style={{alignItems:"center"}}>
    <TouchableOpacity style={{backgroundColor:"green", marginTop:10, height:40, width:200, borderRadius:20}} 
    onPress={() => navigation.navigate('Resize')}><Text style={{marginTop:10, marginLeft:35, color:"#FFF"}}>Go to Resize Page</Text></TouchableOpacity>
   </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    alignItems: "center",
    marginTop: 50,
    flex: 1,
  },
});
export default App;
