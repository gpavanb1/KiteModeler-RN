/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import { Alert, BackHandler } from "react-native";
import { setJSExceptionHandler, setNativeExceptionHandler } from "react-native-exception-handler";
import { LogBox } from 'react-native';

import MyTabView from './src/screens/main'

// Ignore reanimated logs
LogBox.ignoreLogs(['Reanimated 2']);

const reporter = (error: any) => {
  // Logic for reporting to devs
  // Example : Log issues to github issues using github apis.
  console.log(error); // sample
};

const errorHandler = (e: any, isFatal: any) => {
  if (isFatal) {
    reporter(e);
    Alert.alert(
      "Unexpected error occurred",
      `
        Error: ${isFatal ? "Fatal:" : ""} ${e.name} ${e.message}

        We have reported this to our team ! Please close the app and start again!
        `,
      [
        {
          text: "Close",
          onPress: () => {
            BackHandler.exitApp();
          },
        },
      ]
    );
  } else {
    console.log(e); // So that we can see it in the ADB logs in case of Android if needed
  }
};

setJSExceptionHandler(errorHandler);

setNativeExceptionHandler((errorString) => {
  //You can do something like call an api to report to dev team here
  //example
  // fetch('http://<YOUR API TO REPORT TO DEV TEAM>?error='+errorString);
  //
});

const App = () => {
  return (
    <MyTabView />
  );
};

export default App;
