import React from 'react';
import {Dimensions, View, ViewProps} from 'react-native';
import THEME from '../../THEME.json';

interface BaseScreenProps extends ViewProps {}

const BaseScreen: React.FC<BaseScreenProps> = ({
  children,
  style,
  ...nativeProps
}) => {
  const {width, height} = Dimensions.get('window');

  return (
    <View
      style={{
        ...style,
        width,
        height,
        backgroundColor: THEME.colors.blue,
      }}
      {...nativeProps}>
      {children}
    </View>
  );
};

export default BaseScreen;
