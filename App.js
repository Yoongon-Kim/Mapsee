import { StatusBar } from 'expo-status-bar';
import { ImageComponent, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import FirstScreen from './screens/FirstScreen';
import RegisterScreen from './screens/RegisterScreen';
import AfterLoginScreen from './screens/AfterLoginScreen';
import RegisterScreen1 from './screens/RegisterScreen1';
import RegisterScreen2 from './screens/RegisterScreen2';
import RegisterScreen3 from './screens/RegisterScreen3';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='First'>
        <Stack.Screen options={{headerShown:false}} name="First" component={FirstScreen} />
        <Stack.Screen options={{headerShown:false}} name="Register1" component={RegisterScreen1} />
        <Stack.Screen options={{headerShown:false}} name="Register2" component={RegisterScreen2} />
        <Stack.Screen options={{headerShown:false}} name="Register3" component={RegisterScreen3} />
        <Stack.Screen options={{headerShown:false}} name="Login" component={LoginScreen} />
        <Stack.Screen options={{headerShown:false}} name="AfterLogin" component={AfterLoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
