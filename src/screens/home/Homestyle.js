import {appColors} from '../../utils/Colors';

const {StyleSheet} = require('react-native');
// import {useSelector} from 'react-redux';
// const Theme = useSelector(state => state.theme);

export const HomeStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  header: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'space-between',
    // backgroundColor: 'red',
  },
  lineAndHome: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lineIcon: {
    width: 30,
    height: 30,
    backgroundColor: appColors.iconBackground,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  homeText: {
    marginLeft: 20,
    fontSize: 17,
    fontWeight: 'bold',
  },
  ShopingIcon: {
    width: 30,
    height: 30,
    backgroundColor: appColors.iconBackground,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  popularText: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 20,
    marginVertical: 18,
    color: appColors.blackTextColor,
  },
  NewArrivalText: {
    color: appColors.blackTextColor,
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 20,
    marginVertical: 18,
  },
  LimitedTimeText: {
    color: appColors.orangeTextColor,
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 20,
    marginVertical: 18,
  },
});
