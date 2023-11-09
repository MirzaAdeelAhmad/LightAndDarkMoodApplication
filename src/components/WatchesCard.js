import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {appColors} from '../utils/Colors';

export default function WatchesCard({items}) {
  return (
    <View
      style={{
        width: 220,
        height: 220,
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
        source={items.image}
        style={{width: 220, height: 220, borderRadius: 10}}
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
        {items.name}
      </Text>

      <TouchableOpacity style={{position: 'absolute', top: 10, left: 10}}>
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
      </TouchableOpacity>
    </View>
  );
}
