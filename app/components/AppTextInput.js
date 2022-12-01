import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../config/styles";
import Screen from "./Screen";

const AppTextInput = ({ icon, size = 25, ...otherProps }) => {
  return (
    <Screen>
      <View style={styles.container}>
        {icon && (
          <MaterialCommunityIcons
            size={size}
            name={icon}
            color={defaultStyles.colors.medium}
            style={styles.icon}
          />
        )}
        <TextInput style={defaultStyles.text} {...otherProps} />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    padding: 15,
    marginVertical: 10,
    flexDirection: "row",
    width: "100%",
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
