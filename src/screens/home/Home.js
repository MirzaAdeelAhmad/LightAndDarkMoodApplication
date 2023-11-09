import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {HomeStyle} from './Homestyle';
import {SafeAreaView} from 'react-native-safe-area-context';
// ------- importing components ------
import Searchbar from '../../components/Searchbar';
import WatchesCard from '../../components/WatchesCard';
import WatchesCardMini from '../../components/WatchesCardMini';
import {ChangeTheme} from '../../redux/ThemeSlice';
// ----- importing images and logos ------
import twoLines from '../../../assets/icons/line.png';
import ShopingIcon from '../../../assets/icons/shopping-cart.png';
// ----- importing watches data --------
import {popularWatches} from '../../components/WatchesData';
import {newArrivalWatches} from '../../components/WatchesData';
import {limitedTimeSpecial} from '../../components/WatchesData';
import {useDispatch, useSelector} from 'react-redux';
import {appColors} from '../../utils/Colors';

export default function Home({data}) {
  const [MyPopularWatches, setMyPopularWatches] = useState('');
  const [MyNewArrivalWatches, setMyNewArrivalWatches] = useState('');
  const [MyLimitedTimeWatches, setMyLimitedTimeWatches] = useState('');
  const Theme = useSelector(state => state.theme);
  const dispatch = useDispatch();
  // console.log(Theme.data);
  useEffect(() => {
    setMyPopularWatches(popularWatches.watches);
    setMyNewArrivalWatches(newArrivalWatches.watches);
    setMyLimitedTimeWatches(limitedTimeSpecial.watches);
  }, []);

  return (
    <View
      style={[
        HomeStyle.mainContainer,
        {
          backgroundColor:
            Theme.data == 'LIGHT'
              ? appColors.whiteBackground
              : appColors.blackBackground,
        },
      ]}>
      <ScrollView>
        <SafeAreaView>
          {/* -------- Header -------- */}
          <View style={HomeStyle.header}>
            <View style={HomeStyle.lineAndHome}>
              <TouchableOpacity
                style={[
                  HomeStyle.lineIcon,
                  {
                    backgroundColor:
                      Theme.data == 'LIGHT'
                        ? appColors.whiteBackground
                        : appColors.lightBlackBackground,
                  },
                ]}>
                <Image
                  source={twoLines}
                  style={{width: 25, height: 20}}
                  tintColor={
                    Theme.data == 'LIGHT'
                      ? appColors.blackTextColor
                      : appColors.whiteTextColor
                  }
                />
              </TouchableOpacity>
              <Text
                style={[
                  HomeStyle.homeText,
                  {
                    color:
                      Theme.data == 'LIGHT'
                        ? appColors.blackTextColor
                        : appColors.whiteTextColor,
                  },
                ]}>
                Home
              </Text>
            </View>
            <TouchableOpacity
              style={[
                HomeStyle.ShopingIcon,
                {
                  backgroundColor:
                    Theme.data == 'LIGHT'
                      ? appColors.whiteBackground
                      : appColors.lightBlackBackground,
                },
              ]}>
              <Image
                source={ShopingIcon}
                style={{width: 25, height: 25}}
                tintColor={
                  Theme.data == 'LIGHT'
                    ? appColors.blackTextColor
                    : appColors.whiteTextColor
                }
              />
            </TouchableOpacity>
          </View>
          {/* --------- SearchBar --------- */}
          <Searchbar />
          {/* <Text>hi</Text> */}
          {/* ----------- Buttons ---------- */}
          {/* <TouchableOpacity
            onPress={() => {
              dispatch(ChangeTheme('LIGHT'));
            }}>
            <Text>LIGHT</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              dispatch(ChangeTheme('DARK'));
            }}>
            <Text>DARK</Text>
          </TouchableOpacity> */}
          {/* ------------------ Cards ------------------ */}

          {/* ---------- Popular ---------- */}
          <Text
            style={[
              HomeStyle.popularText,
              {
                color:
                  Theme.data == 'LIGHT'
                    ? appColors.blackTextColor
                    : appColors.whiteTextColor,
              },
            ]}>
            Popular
          </Text>
          <FlatList
            data={MyPopularWatches}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return <WatchesCard items={item} />;
            }}
          />

          {/* ---------  New Arrivals  --------- */}
          <Text
            style={[
              HomeStyle.NewArrivalText,
              {
                color:
                  Theme.data == 'LIGHT'
                    ? appColors.blackTextColor
                    : appColors.whiteTextColor,
              },
            ]}>
            New Arriivals
          </Text>
          <FlatList
            data={MyNewArrivalWatches}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return <WatchesCardMini miniItems={item} />;
            }}
          />
          {/* ---------  Limited Time Special  --------- */}
          <Text style={HomeStyle.LimitedTimeText}>Limited-Time Specials</Text>
          <FlatList
            data={MyLimitedTimeWatches}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return <WatchesCardMini miniItems={item} />;
            }}
          />
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}
