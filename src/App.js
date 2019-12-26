/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from "react";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";

import lightTheme from "./theme/light";
import darkTheme from "./theme/dark";

import Home from "./pages/Home";

const App = () => {
  const [dark, setDark] = useState(false);

  return (
    <ThemeProvider theme={dark ? darkTheme : lightTheme}>
      <StatusBar
        barStyle={dark ? "light-content" : "dark-content"}
        backgroundColor={dark ? darkTheme.background : lightTheme.background}
      />
      <Home onDarkModeChange={() => setDark(!dark)} darkModeValue={dark} />
    </ThemeProvider>
  );
};

export default App;
