import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';

 function Flexbox({navigation}) {

  
  return (
    <View style={styles.container} >
      <View style={{alignItems:"center", justifyContent:"center"}}>  <Text style={{fontWeight:"bold", color:"#FFF", marginBottom:10, fontSize:20,  }}>Flexbox  </Text></View>
      
      <View style={{backgroundColor: 'red', flex:1, flexDirection: 'row'}}></View>
      <View style={{backgroundColor: 'green',flex:2 , flexDirection: 'row'}}></View>
      <View style={{backgroundColor: 'yellow' ,flex:3, flexDirection: 'row' }}></View>
      <View style={{alignItems:"center"}}>
      <TouchableOpacity  style={{backgroundColor:"green", marginTop:20, height:40, width:200, borderRadius:20}} 
      onPress={() => navigation.navigate('Text')}><Text style={{marginTop:10, marginLeft:45, color:"#FFF"}}>Go to Text Page</Text></TouchableOpacity>
   </View>
    </View>
  );

  }
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    flex:1,
    padding:20
  },
})
export default Flexbox;
