import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./src/routes/MainStack";
import AuthStack from "./src/routes/AuthStack";
import { Appearance, AppearanceProvider, useColorScheme } from 'react-native-appearance';


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
    {/* <AppearanceProvider> */}
      {/* <Provider store={store}> */}
        <NavigationContainer>
          <MainStack />
          {/* <AuthStack /> */}
        </NavigationContainer>
      {/* </Provider> */}
    {/* </AppearanceProvider> */}
    </>
  );
}
