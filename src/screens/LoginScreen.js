import React, { Component } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Text, SocialIcon } from "react-native-elements";
import { Facebook } from "expo";
import { connect } from "react-redux";

import { FACEBOOK_APP_ID } from "../helpers";
import { loginWithFacebook } from "../firebase";

class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.login = this.login.bind(this);
  }

  async login() {
    console.log(this.props);
    try {
      const { type, token } = await Facebook.logInWithReadPermissionsAsync(
        FACEBOOK_APP_ID,
        { permissions: ["public_profile"] }
      );
      if (type === "success") {
        // const response = await fetch(
        //   `https://graph.facebook.com/me?access_token=${token}`
        // );
        // Alert.alert("Logged in!", `Hi ${(await response.json()).name}!`);
        const {
          displayName,
          email,
          metadata,
          photoURL,
          refreshToken
        } = await loginWithFacebook(token);
        this.props.login(displayName, email, metadata, photoURL, refreshToken);
        this.props.navigation.navigate("Main");
      }
    } catch (err) {
      console.log(err);
      Alert.alert("Error", `Ops! There was an error!`);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text h1 style={styles.title}>
          World Cup Bets 2018
        </Text>
        <SocialIcon
          title="Sign In With Facebook"
          button
          type="facebook"
          onPress={this.login}
          style={styles.button}
        />
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    login: ({ displayName, email, metadata, photoURL, refreshToken }) =>
      dispatch(
        ActionCreactor.login(
          displayName,
          email,
          metadata,
          photoURL,
          refreshToken
        )
      )
  };
}

export default connect(
  null,
  mapDispatchToProps
)(LoginScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    textAlign: "center"
  },
  button: {
    marginTop: 30,
    width: 300
  }
});
