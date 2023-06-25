import React, {useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {NativeBaseProvider, Box, Button} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  const [count, setCounter] = useState(0);

  const addOne = () => {
    setCounter(count + 1);
  };

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <SafeAreaView>
          <Box>
            <Text>Hello World!</Text>
            <Text>{count}</Text>
            <Button onPress={addOne}>Add</Button>
          </Box>
        </SafeAreaView>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
