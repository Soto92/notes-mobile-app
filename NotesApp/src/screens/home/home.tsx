import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import BaseScreen from '../../components/baseScreen/baseScreen';
import {getNotes, postNote} from '../../services/api';

const Home = () => {
  const [text, setText] = useState('');

  const fetchNotes = async () => {
    try {
      const response = await getNotes();
      setText(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <BaseScreen>
      <Text>Home</Text>
      <TextInput
        value={text}
        multiline={true}
        numberOfLines={4}
        onChangeText={arg => setText(text + arg)}
      />
      <Button
        icon="content-save"
        mode="contained"
        onPress={() => postNote(text)}>
        Save
      </Button>
    </BaseScreen>
  );
};

export default Home;
