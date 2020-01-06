import React, { useState, useEffect } from "react";
import { AsyncStorage } from "react-native";
import { StateProvider } from "./states/ThemeState";

import lightTheme from "./theme/light";
import darkTheme from "./theme/dark";

import App from "./App";

export default function Index() {
  const initialState = { theme: lightTheme };

  async function updateStorage(state) {
    try {
      await AsyncStorage.setItem("DarkModeKey", state.toString());
    } catch (err) {
      console.log("error" + err);
    }
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case "enableDarkMode":
        updateStorage(true);
        return {
          ...state,
          theme: darkTheme
        };
      case "disableDarkMode":
        updateStorage(false);
        return {
          ...state,
          theme: lightTheme
        };
      default:
        return state;
    }
  };

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  );
}
