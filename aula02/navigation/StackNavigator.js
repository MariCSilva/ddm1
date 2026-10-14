import { NavigationContainer } from '@reactive-navigation/native';
import { createNativeStackNavigation } from '@reactive-navigation/native-stack';

import Login from '../screens/login/Login';
// import Home from '../screens/home/Home';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return(
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Login"
          component={Login}        
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
