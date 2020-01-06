/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useEffect } from "react";
import { StatusBar, AsyncStorage } from "react-native";
import { ThemeProvider } from "styled-components";
import "react-native-gesture-handler";

import { useStateValue } from "./states/ThemeState";
import Routes from "./routes";

const App = () => {
  const [state, dispach] = useStateValue();

  useEffect(() => {
    async function getStoregeDarkMode() {
      const darkModeKey = await AsyncStorage.getItem("DarkModeKey");
      if (darkModeKey === "true") {
        dispach({
          type: "enableDarkMode"
        });
        return;
      }
      dispach({
        type: "disableDarkMode"
      });
    }

    getStoregeDarkMode();
  }, []);

  return (
    <ThemeProvider theme={state.theme}>
      <StatusBar
        barStyle={state.theme.statusBarStyle}
        backgroundColor={state.theme.background}
      />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
