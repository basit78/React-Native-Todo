import  React,{useEffect,useState} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../../screens/appIntro/SplashScreen';
import Signin from '../../screens/authScreens/Signin';
import Signup from '../../screens/authScreens/Signup';
import ForgotPassword from '../../screens/authScreens/ForgotPassword';
import Bottom from '../Bottom';

const Stack = createNativeStackNavigator();

function StackNavigtaion() {
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 1000);
  }, []);

  if (splash) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Bottom" component={Bottom} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigtaion;
