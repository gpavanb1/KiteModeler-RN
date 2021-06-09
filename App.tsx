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
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';

 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';

import { Alert, BackHandler } from "react-native";
import { setJSExceptionHandler, setNativeExceptionHandler } from "react-native-exception-handler";

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

 const Section: React.FC<{
   title: string;
 }> = ({children, title}) => {
   const isDarkMode = useColorScheme() === 'dark';
   return (
     <View style={styles.sectionContainer}>
       <Text
         style={[
           styles.sectionTitle,
           {
             color: isDarkMode ? Colors.white : Colors.black,
           },
         ]}>
         {title}
       </Text>
       <Text
         style={[
           styles.sectionDescription,
           {
             color: isDarkMode ? Colors.light : Colors.dark,
           },
         ]}>
         {children}
       </Text>
     </View>
   );
 };

 const App = () => {
   const isDarkMode = useColorScheme() === 'dark';

   const backgroundStyle = {
     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   };

   return (
     <SafeAreaView style={backgroundStyle}>
       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
       <ScrollView
         contentInsetAdjustmentBehavior="automatic"
         style={backgroundStyle}>
         <Header />
         <View
           style={{
             backgroundColor: isDarkMode ? Colors.black : Colors.white,
           }}>
           <Section title="Step One">
             Edit <Text style={styles.highlight}>App.js</Text> to change this
             screen and then come back to see your edits.
           </Section>
           <Section title="See Your Changes">
             <ReloadInstructions />
           </Section>
           <Section title="Debug">
             <DebugInstructions />
           </Section>
           <Section title="Learn More">
             Read the docs to discover what to do next:
           </Section>
           <LearnMoreLinks />
         </View>
       </ScrollView>
     </SafeAreaView>
   );
 };

 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
 });

 export default App;
