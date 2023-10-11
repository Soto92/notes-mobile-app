import AsyncStorage from '@react-native-community/async-storage';

const getData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  } catch (error) {
    return null;
  }
};

const removeData = async () => {
  AsyncStorage.clear();
};

const storeData = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    // Error saving data
  }
};

export default {
  removeData,
  storeData,
  getData,
};
