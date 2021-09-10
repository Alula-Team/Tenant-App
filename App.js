import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./src/routes/MainStack";
import AuthStack from "./src/routes/AuthStack";


// Redux Stuff
// import { Provider } from "react-redux";
// import { createStore } from "redux";
// import rootReducer from "./src/redux/reducers";

// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

export default function App() {
  return (
    <>
      <SafeAreaProvider>
        {/* <Provider store={store}> */}
          <NavigationContainer>
            <StatusBar style="dark" />
            <MainStack />
            {/* <AuthStack /> */}
          </NavigationContainer>
        {/* </Provider> */}
      </SafeAreaProvider>
    </>
  );
}
