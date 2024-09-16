import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import QuenMatKhauScreen from './screens/QuenMatKhauScreen'; // Import your QuenMatKhauScreen component
import DangKy from './screens/Dangky';
import DangNhap from './screens/DangNhap';
import DoiMk from './screens/DoiMk';
import TimKiemBanDuLich from './screens/TimKiemBanDuLich';
import ThongTinCaNhan from './screens/ThongTinCaNhan';
import TimKiem from './screens/TimKiem';
import Blog from './screens/Blog';
import ThongBao from './screens/ThongBao';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ThongBao">
        <Stack.Screen name="QuenMatKhau" component={QuenMatKhauScreen} options={{  headerShown: false }} />
        <Stack.Screen 
          name="DangKy" 
          component={DangKy} 
          options={{ headerShown: false }} // You can set headerShown to true if you want to show the header.
        />
        <Stack.Screen 
          name="DangNhap" 
          component={DangNhap} 
          options={{ headerShown: false }} // You can set headerShown to true if you want to show the header
        />
         <Stack.Screen 
          name="DoiMK" 
          component={DoiMk} 
          options={{ headerShown: false }} // You can set headerShown to true if you want to show the header
        />
         <Stack.Screen 
          name="TimKiemBanDuLich" 
          component={TimKiemBanDuLich} 
          options={{ headerShown: false }} // You can set headerShown to true if you want to show the header
        />
        <Stack.Screen 
          name="ThongTinCaNhan" 
          component={ThongTinCaNhan} 
          options={{ headerShown: false }} // You can set headerShown to true if you want to show the header
        />
        <Stack.Screen 
          name="TimKiem" 
          component={TimKiem} 
          options={{ headerShown: false }} // You can set headerShown to true if you want to show the header
        />
        <Stack.Screen 
          name="Blog" 
          component={Blog} 
          options={{ headerShown: false }} // You can set headerShown to true if you want to show the header
        />
         <Stack.Screen 
          name="ThongBao" 
          component={ThongBao} 
          options={{ headerShown: false }} // You can set headerShown to true if you want to show the header
        />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
};

export default App;
