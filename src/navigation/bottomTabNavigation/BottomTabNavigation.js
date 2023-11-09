import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicon from 'react-native-vector-icons/Ionicons';
// ------ Importing Screens -------
import Home from '../../screens/home/Home';
import Favourites from '../../screens/favourite/Favourites';
import Profile from '../../screens/profile/Profile';
import Setting from '../../screens/setting/Setting';
import {useSelector} from 'react-redux';
import {appColors} from '../../utils/Colors';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigation() {
  const Theme = useSelector(state => state.theme);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor:
            Theme.data == 'LIGHT'
              ? appColors.iconBackground
              : appColors.blackBackground,
          height: 90,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => {
            return (
              <Ionicon
                name="home-outline"
                size={25}
                color={
                  Theme.data == 'LIGHT'
                    ? appColors.blackBackground
                    : appColors.whiteBackground
                }
              />
            );
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={Favourites}
        options={{
          tabBarIcon: () => {
            return (
              <Ionicon
                name="heart-outline"
                size={25}
                color={
                  Theme.data == 'LIGHT'
                    ? appColors.blackBackground
                    : appColors.whiteBackground
                }
              />
            );
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => {
            return (
              <Ionicon
                name="person-outline"
                size={25}
                color={
                  Theme.data == 'LIGHT'
                    ? appColors.blackBackground
                    : appColors.whiteBackground
                }
              />
            );
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: () => {
            return (
              <Ionicon
                name="settings-outline"
                size={25}
                color={
                  Theme.data == 'LIGHT'
                    ? appColors.blackBackground
                    : appColors.whiteBackground
                }
              />
            );
          },
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
