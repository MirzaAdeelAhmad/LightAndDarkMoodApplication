import {View, Text, TextInput, Image} from 'react-native';
import React from 'react';
import {appColors} from '../utils/Colors';
import searchIcon from '../../assets/icons/loupe.png';
import {useSelector} from 'react-redux';

export default function Searchbar() {
  const Theme = useSelector(state => state.theme);

  return (
    <View
      style={{
        width: '90%',
        height: 50,
        backgroundColor:
          Theme.data == 'LIGHT'
            ? appColors.iconBackground
            : appColors.lightBlackBackground,
        marginTop: 20,
        alignSelf: 'center',
        borderRadius: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={searchIcon}
        style={{width: 16, height: 16}}
        tintColor={'gray'}
      />
      <TextInput
        placeholder="Search the watch you wish for..."
        placeholderTextColor={
          Theme.data == 'LIGHT'
            ? appColors.blackTextIputColor
            : appColors.whiteTextIputColor
        }
        style={{
          width: '65%',
          height: 50,
          backgroundColor:
            Theme.data == 'LIGHT'
              ? appColors.iconBackground
              : appColors.lightBlackBackground,
          fontSize: 17,
          alignSelf: 'center',
          marginLeft: 10,
        }}
      />
    </View>
  );
}
