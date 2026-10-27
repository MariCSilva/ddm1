import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './screens/login/Login';
import Home from './screens/home/Home';
import Jogos from './screens/jogos/Jogos';
import Pers from './screens/personagens/Personagens';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          // options=[[
          //headerShown: false,
          // }}
        />
        
        <Stack.Screen
          name="Home"
          component={Home}
        />

        <Stack.Screen
          name="Jogos"
          component={Jogos}
        />

        <Stack.Screen
          name="Personagens"
          component={Pers}
        />



      </Stack.Navigator>
    </NavigationContainer>
  );
}