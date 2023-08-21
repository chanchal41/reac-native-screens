
import React,{useState} from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';

export default function App() {
const [items, setItems] = useState([]);

 const handleRemove = (id) =>{
   setItems((prevState) =>
      prevState.map(
        (item) =>
          item.id === id
            ? item.qty !== 1
              ? { ...item, qty: item.qty - 1 }
              : item.id !== id
            : item // !id
      )
    );

      }
 const handleAdd = () =>{

 }
{items.map((item) => {
  return (
    <View style={styles.container} key={item.id}>
      
<TouchableOpacity onPress={()=>{handleRemove(item.id)}}><Text>-</Text></TouchableOpacity>
<View>{item.title}</View>
<View>${item.price * item.qty}</View>
<View>{item.qty}</View>
<TouchableOpacity onPress={handleAdd}><Text>+</Text></TouchableOpacity>
    </View>
  );
 })}
  }

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
