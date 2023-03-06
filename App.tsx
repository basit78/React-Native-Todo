import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from './component/Icon';
import { colors, fonts } from './theme';
function App() {
  return(
    <View>
      <Text style={{fontFamily:fonts.sfproBold , color:colors.INPUT_BG}}>Test</Text>
      <Icon name="home" type="material" color={'green'}/>
    </View>
   );
}


export default App;
