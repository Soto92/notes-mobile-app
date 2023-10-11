import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import BaseScreen from '../../components/baseScreen/baseScreen';
import StoreUtil from '../../utils/storage/asyncStorage';

const Search = ({route}) => {
  const {setUserToken} = route?.params;
  return (
    <BaseScreen>
      <Text>Some random screen</Text>
      <TouchableOpacity
        onPress={() => {
          StoreUtil.removeData();
          setUserToken(false);
        }}>
        <Text>Log out</Text>
      </TouchableOpacity>
    </BaseScreen>
  );
};
export default Search;
