/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {Image} from 'react-native';
import Logo from '../../assets/img/biglogo.png';
import BaseScreen from '../../components/baseScreen/baseScreen';

const SplashScreen = () => {
  return (
    <BaseScreen
      style={{
        paddingTop: '60%',
      }}>
      <Image
        style={{width: 200, height: 160, alignSelf: 'center'}}
        source={Logo}
      />
    </BaseScreen>
  );
};

export default SplashScreen;
