import * as React from "react";
import { StatusBar } from 'expo-status-bar';
import { Provider } from "react-redux";
import store from "./redux/store";
import CustomRouter from "./components/CustomRouter";

import { LogBox } from "react-native";

LogBox.ignoreLogs(["Setting a timer"]);
const _console = { ...console };
console.warn = (message) => {
  if (message.indexOf("Setting a timer") <= -1) {
    _console.warn(message);
  }
};

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <CustomRouter />
    </Provider>
  );
}
