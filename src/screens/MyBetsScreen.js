import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";

class MyBetsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text h1>MyBetsScreen Screen</Text>
      </View>
    );
  }
}

export default MyBetsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
