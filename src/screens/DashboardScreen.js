import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";

class DashboardScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text h1>DashboardScreen Screen</Text>
      </View>
    );
  }
}

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
