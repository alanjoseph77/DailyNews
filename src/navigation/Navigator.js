import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { HomeIcon, MagnifyingGlassIcon } from 'react-native-heroicons/solid';
import { LifebuoyIcon } from 'react-native-heroicons/outline';
import Home from '../Screens/Home';
import Search from '../Screens/Search';
import Sports from '../Screens/Sports';
import All from '../components/AllNewsScreens/All';
import Health from '../components/AllNewsScreens/Health';
import Entertainment from '../components/AllNewsScreens/Entertinment';
import Politics from '../components/AllNewsScreens/Politics';
import SportsN from '../components/AllNewsScreens/Sports';
import { COLORS } from '../../constants/theme';
import India from '../components/AllNewsScreens/India';
import NewsScreen from '../Screens/NewsScreen';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator>
      
      <Stack.Screen
        name="Tab"
        component={MyTab}
        options={{ headerShown: false, headerTintColor: "black", }}
        initialRoute={{ statusBarHidden: false }}
      />

      <Stack.Screen name="All" 
      component={All} 
      options={{ headerShown: false, headerTintColor: "black", }}
        initialRoute={{ statusBarHidden: false }}/>
      <Stack.Screen name="Sportsn"
       component={SportsN} 
       options={{ headerShown: false, headerTintColor: "black", }}
        initialRoute={{ statusBarHidden: false }}/>
        <Stack.Screen name="Health" 
      component={Health} 
      options={{ headerShown: false, headerTintColor: "black", }}
        initialRoute={{ statusBarHidden: false }}/>
      <Stack.Screen name="Politics"
       component={Politics} 
       options={{ headerShown: false, headerTintColor: "black", }}
        initialRoute={{ statusBarHidden: false }}/>
        <Stack.Screen name="India"
       component={India} 
       options={{ headerShown: false, headerTintColor: "black", }}
        initialRoute={{ statusBarHidden: false }}/>
        <Stack.Screen name="Entertainment"
       component={Entertainment} 
       options={{ headerShown: false, headerTintColor: "black", }}
        initialRoute={{ statusBarHidden: false }}/>
        <Stack.Screen name="NewsScreen"
       component={NewsScreen} 
       options={{ headerShown: false, headerTintColor: "black", }}
        initialRoute={{ statusBarHidden: false }}/>
      
    </Stack.Navigator>
  );
};

function MyTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => heroicons(route, focused),
        tabBarStyle: {
          backgroundColor: COLORS.primary3,
          marginBottom: 16,
          borderRadius: 150,
          marginHorizontal: 20,
          height: 70,
          marginLeft: 30,
          marginRight: 30,
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Sports" component={Sports} />
    </Tab.Navigator>
  );
}

const heroicons = (route, focused) => {
  const commonIconStyle = {
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
    height: "100%",
    borderRadius: 10,
    backgroundColor: focused ? COLORS.primary : COLORS.primary3,
  };

  let icon;
  if (route.name == 'Home') {
    icon = focused ? (
      <HomeIcon size={20} color="black" />
    ) : (
      <HomeIcon size={20} color="white" strokeWidth={2} />
    );
  } else if (route.name == 'Search') {
    icon = focused ? (
      <MagnifyingGlassIcon size={20} color="black" />
    ) : (
      <MagnifyingGlassIcon size={20} color="white" strokeWidth={2} />
    );
  } else if (route.name == 'Sports') {
    icon = focused ? (
      <LifebuoyIcon size={20} color="black" />
    ) : (
      <LifebuoyIcon size={20} color="white" strokeWidth={2} />
    );
  }

  return (
    <View style={commonIconStyle}>
      {icon}
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});

export default Navigator;
