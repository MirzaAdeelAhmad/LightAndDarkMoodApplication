import {View, Text, Image} from 'react-native';
import React from 'react';
import {appColors} from '../utils/Colors';

export default function WatchesCardMini({miniItems}) {
  return (
    <View
      style={{
        width: 130,
        height: 130,
        backgroundColor: appColors.background,
        marginLeft: 20,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: {
          width: 3,
          height: 3,
        },
        shadowOpacity: 100.5,
        shadowRadius: 5,
        marginBottom: 10,
      }}>
      <Image
        source={miniItems.image}
        style={{width: 130, height: 130, borderRadius: 10}}
      />
      <Text
        style={{
          color: 'white',
          position: 'absolute',
          bottom: 10,
          left: 10,
          width: 140,
          fontWeight: 'bold',
          fontSize: 16,
        }}>
        {miniItems.name}
      </Text>

      {/* <TouchableOpacity style={{position: 'absolute', top: 10, left: 10}}>
      <Image
        source={items.imageHeart}
        style={{width: 20, height: 20, tintColor: 'white'}}
      />
    </TouchableOpacity>
    <TouchableOpacity
      style={{
        position: 'absolute',
        top: 0,
        right: 10,
        backgroundColor: appColors.cartBackground,
        width: 30,
        height: 35,
        justifyContent: 'center',
      }}>
      <Image
        source={items.imageCart}
        style={{width: 20, height: 20, tintColor: 'white', marginLeft: 3}}
      />
    </TouchableOpacity> */}
    </View>
  );
}
