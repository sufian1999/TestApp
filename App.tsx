/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { Button, StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import ConfirmModal from './src/components/ConfirmModal';
import { useState } from 'react';
import { KeyboardProvider } from 'react-native-keyboard-controller';

function App() {

  const isDarkMode = useColorScheme() === 'dark';

  const [showSignOutAlert, setShowSignOutAlert] = useState<boolean>(false);

  const alertData = [
    {
      title: 'Confirmation',
      body: `Are you sure? You want to Sign Out`,
      btn1: 'Sign Out',
      btn2: 'Cancel',
    }
  ]

  const NewAppScreenComp = () => {
    return (
      <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Button
        onPress={() => setShowSignOutAlert(true)}
        title="Sign Out"
      />
      <NewAppScreen templateFileName="App.tsx" />

      <ConfirmModal
        visible={showSignOutAlert}
        data={alertData[0]}
        unVisibal={() => setShowSignOutAlert(false)}
        btn1={() => setShowSignOutAlert(false)}
        btn2={() => setShowSignOutAlert(false)}
      />
    </View>
    )
  }

  return (
    <KeyboardProvider>
      <NewAppScreenComp />
    </KeyboardProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
