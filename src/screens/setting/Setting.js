import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ChangeTheme} from '../../redux/ThemeSlice';
import {appColors} from '../../utils/Colors';

export default function Setting() {
  const Theme = useSelector(state => state.theme);
  const dispatch = useDispatch();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:
          Theme.data == 'LIGHT'
            ? appColors.whiteBackground
            : appColors.blackBackground,
      }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: '600',
          marginBottom: 60,
          color:
            Theme.data == 'LIGHT'
              ? appColors.blackTextColor
              : appColors.whiteTextColor,
        }}>
        Choose Your Favourite Theme
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor:
            Theme.data == 'LIGHT'
              ? appColors.blackBackground
              : appColors.whiteBackground,
          width: 120,
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 25,
          marginBottom: 20,
        }}
        onPress={() => {
          dispatch(ChangeTheme('LIGHT'));
        }}>
        <Text
          style={{
            color:
              Theme.data == 'LIGHT'
                ? appColors.whiteTextColor
                : appColors.blackTextColor,
            fontWeight: '600',
          }}>
          Light
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor:
            Theme.data == 'LIGHT'
              ? appColors.blackBackground
              : appColors.whiteBackground,
          width: 120,
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 25,
          marginBottom: 20,
        }}
        onPress={() => {
          dispatch(ChangeTheme('DARK'));
        }}>
        <Text
          style={{
            color:
              Theme.data == 'LIGHT'
                ? appColors.whiteTextColor
                : appColors.blackTextColor,
            fontWeight: '600',
          }}>
          Dark
        </Text>
      </TouchableOpacity>
    </View>
  );
}
