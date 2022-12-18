import React from "react";
import LottieView from "lottie-react-native";
import { StyleSheet } from "react-native";

const ActivityIndicator = ({ visible = false }) => {
  if (!visible) return null;

  return (
    <LottieView
      style={styles.animation}
      autoPlay
      loop
      source={require("../assets/animations/loader.json")}
    />
  );
};

const styles = StyleSheet.create({
  animation: {
    width: 150,
  },
});

export default ActivityIndicator;
