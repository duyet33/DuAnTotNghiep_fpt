import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import QuenMatKhauScreen from './screens/QuenMatKhauScreen'; // Import your QuenMatKhauScreen component
import DangKy from './screens/Dangky';
import DangNhap from './screens/DangNhap';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DangKy">
        <Stack.Screen name="QuenMatKhau" component={QuenMatKhauScreen} options={{  headerShown: false }} />
        <Stack.Screen 
          name="DangKy" 
          component={DangKy} 
          options={{ headerShown: false }} // You can set headerShown to true if you want to show the header
        />
        <Stack.Screen 
          name="DangNhap" 
          component={DangNhap} 
          options={{ headerShown: false }} // You can set headerShown to true if you want to show the header
        />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
};

export default App;
