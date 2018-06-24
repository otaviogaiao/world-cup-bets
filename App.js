import React from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import * as firebase from "firebase";
import { AppLoading } from "expo";
import { store, persistor } from "./src/store";
import navigator from "./src/navigation";
import navigation from "./src/navigation";

export default class App extends React.Component {
  state = {
    loading: true,
    loggedIn: false
  };

  async componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          loading: false,
          loggedIn: true
        });
      } else {
        this.setState({
          loading: false,
          loggedIn: false
        });
      }
    });
  }

  render() {
    const { loading, loggedIn } = this.state;
    if (loading) {
      return <AppLoading />;
    }
    const Navigator = navigator(loggedIn ? "Main" : "Login");
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor} onBeforeLift={() => {}}>
          <Navigator />
        </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
