import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EntryList from './component/EntryList';
import AllEntry from './screen/AllEntry';
import OverEntry from './screen/OverEntry';
import AddEntry from './screen/AddEntry';
import EditEntry from './screen/EditEntry';

export default function App() {

  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();

  const TabNavi = () => (
    <Tab.Navigator>
      <Tab.Screen 
        name="All" 
        component={AllEntry} 
        initialParams={{ 
          titleText: 'TEST aLL'
        }}
      />
      <Tab.Screen name="Over" component={OverEntry} initialParams={{ 
          titleText: 'TEST Over'
        }}/>
    </Tab.Navigator>
  );

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={TabNavi}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Add"
          component={AddEntry}
        />
        <Stack.Screen
          name="Edit"
          component={EditEntry}
        />
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
