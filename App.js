import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Start"
        screenOptions={{
          headerTitleAlign: 'center',
          headerTintColor: 'red',
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            title: 'Welcome',
            headerTitleAlign: 'center',
            headerTintColor: 'grey',
            headerStyle: {
              backgroundColor: 'lightblue'
            },
          headerRight: () => <Button title="Edit"></Button>
        }}
        />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Start" component={StartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HomeScreen = ({navigation, route}) => {
  const id = route.params.id;
  return(
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Text>Id: {id}</Text>
      <Text>Name: {route.params.name}</Text>
      <Button
        title="Get New Id"
        onPress={() => navigation.setParams({id: Math.floor(Math.random() * 100)})}
      ></Button>
      <Button
        title="Go to Dashboard Screen"
        onPress={() => navigation.navigate('Dashboard')}
      ></Button>
    </View>
  )
}

const StartScreen = ({navigation}) => {
  return(
    <View style={styles.container}>
      <Text>Start Screen</Text>
      <Button
        title="Go to Home Screen"
        onPress={() => navigation.navigate('Home', {id: 12, name: 'Rue'})}
      ></Button>
    </View>
  )
}

const DashboardScreen = ({navigation}) => {
  return(
    <View style={styles.container}>
      <Text>Dashboard Screen</Text>
      <Button
        title="Go to Start Screen"
        onPress={() => navigation.navigate('Start')}
      ></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
