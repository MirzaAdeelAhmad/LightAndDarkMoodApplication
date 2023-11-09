import {View, Text} from 'react-native';
import React from 'react';
import {appColors} from '../../utils/Colors';
import {useSelector} from 'react-redux';

export default function Profile() {
  const Theme = useSelector(state => state.theme);
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
      <Text>Profile</Text>
    </View>
  );
}
