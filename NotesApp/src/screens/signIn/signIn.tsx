/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import THEME from '../../THEME.json';
import Logo from '../../assets/img/biglogo.png';
import BaseScreen from '../../components/baseScreen/baseScreen';
import StoreUtil from '../../utils/storage/asyncStorage';

const SignIn = ({route}) => {
  const {setUserToken} = route.params;

  return (
    <BaseScreen>
      <Image
        style={{width: 200, height: 160, alignSelf: 'center', marginTop: 40}}
        source={Logo}
      />
      <View
        style={{
          height: 220,
          padding: 16,
          marginTop: 50,
          justifyContent: 'space-between',
        }}>
        <TextInput
          activeOutlineColor={THEME.colors.celeste}
          mode="outlined"
          label="Usuário"
        />
        <TextInput
          label="Senha"
          mode="outlined"
          activeOutlineColor={THEME.colors.celeste}
          secureTextEntry
          right={<TextInput.Icon icon="eye" />}
        />
        <Button
          style={{backgroundColor: THEME.colors.green}}
          icon="login-variant"
          mode="contained"
          onPress={() => {
            StoreUtil.storeData('token', '123456');
            setUserToken(true);
          }}>
          Acessar
        </Button>
      </View>
    </BaseScreen>
  );
};

export default SignIn;
