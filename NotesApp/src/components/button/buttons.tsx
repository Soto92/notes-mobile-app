/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import THEME from '../../THEME.json';

const BigButton = ({icon, title, id, buttonStyle, textStyle, onPress}) => {
  return (
    <TouchableOpacity
      style={[
        {
          justifyContent: 'center',
          alignItems: 'center',
        },
        buttonStyle,
      ]}
      onPress={() => onPress(id)}>
      <View
        style={{
          backgroundColor: THEME.colors.light,
          width: 90,
          height: 90,
          borderRadius: 10,
          margin: 5,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <MaterialCommunityIcons
          name={icon}
          color={THEME.colors.celeste}
          size={80}
        />
      </View>
      <Text
        style={[
          {
            color: THEME.colors.musgo,
            fontWeight: '800',
            width: 100,
            height: 40,
            textAlign: 'center',
            marginVertical: 8,
          },
          textStyle,
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default BigButton;
