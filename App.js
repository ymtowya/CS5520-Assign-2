import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EntryList from './component/EntryList';
import AllEntry from './screen/AllEntry';
import OverEntry from './screen/OverEntry';

export default function App() {

  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
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
