import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import QuenMatKhauScreen from './screens/QuenMatKhauScreen'; // Import your QuenMatKhauScreen component


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="QuenMatKhau">
        <Stack.Screen name="QuenMatKhau" component={QuenMatKhauScreen} options={{  headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
