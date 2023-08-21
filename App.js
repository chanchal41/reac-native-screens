import React from "react";

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddItem from './Component/FlatList/AddItem';
import Refresh from './Component/FlatList/Refresh';
import InfiniteScrolling from './Component/FlatList/InfiniteScrolling'
import imageApi from './Component/images/imageApi';
import Resize from './Component/images/Resize';
import imageOverlay from './Component/images/imageOverlay'
import Card from './Component/View/Card'
import Flexbox from './Component/View/Flexbox'

import Text from './Component/Text/Text';
import DynamicText from './Component/Text/DynamicText';
import Readmore from './Component/Text/Readmore';
import Wraps from './Component/Text/Wraps';

const Stack = createNativeStackNavigator();

function App() {
    return (
      
              <NavigationContainer>
                <Stack.Navigator>
             
                <Stack.Screen name="Add Item" component={AddItem}  />  
                <Stack.Screen name="InfiniteScrolling" component={InfiniteScrolling} /> 
                <Stack.Screen name="Refresh" component={Refresh} />  
                <Stack.Screen name="imageApi" component={imageApi} />            
                <Stack.Screen name="Resize" component={Resize} />  
                <Stack.Screen name="imageOverlay" component={imageOverlay} />  
                 <Stack.Screen name="Card" component={Card} />  
                 <Stack.Screen name="Flexbox" component={Flexbox} /> 
                   
                <Stack.Screen name="Text" component={Text} /> 
                 <Stack.Screen name="DynamicText" component={DynamicText} /> 
                <Stack.Screen name="Readmore" component={Readmore} /> 
                 <Stack.Screen name="Wraps" component={Wraps} /> 
              
                </Stack.Navigator>

              </NavigationContainer>
    )
}



export default App