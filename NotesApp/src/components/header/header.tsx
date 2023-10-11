/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Dimensions, Image, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import THEME from '../../THEME.json';
import Logo from '../../assets/img/biglogo.png';

const Header = ({onBack}) => {
  const widthMiddle = Dimensions.get('window').width / 2;
  return (
    <View
      style={{
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: THEME.colors.green,
      }}>
      <TouchableOpacity onPress={onBack} style={{width: widthMiddle - 50}}>
        <MaterialCommunityIcons
          name={'arrow-left-bold'}
          color={THEME.colors.celeste}
          size={30}
        />
      </TouchableOpacity>
      <Image
        style={{width: 80, height: 64, alignSelf: 'center'}}
        source={Logo}
      />
    </View>
  );
};

export default Header;
