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
import ButtonPressable from './component/ButtonPressable';
import { useState } from 'react';

export default function App() {

  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();
  const [limit, setLimit] = useState(500);

  const TabNavi = ( {navigation} ) => (
    <Tab.Navigator>
      <Tab.Screen 
        name="All" 
        component={AllEntry} 
        initialParams={{ 
          titleText: 'TEST aLL'
        }}
        options={({ route }) => {
          return {
            headerRight: () => {
              return (
                <ButtonPressable
                  onPressed={() => {navigation.navigate('Add', { limit: limit });}}
                  selfStyle={{backgroundColor: 'red'}}
                >
                  <Text>X</Text>
                </ButtonPressable>
              );
            }
          };
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
          options={({ route }) => {
            return {
              headerShown: false
            };
          }}
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
