import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import StackNavigation from "./navigations/StackNavigation";
import { Provider } from "react-redux";
import { store } from './redux/store'
export default function App() {
  return (
    <>
      <Provider store={store}>
        <StackNavigation />
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
