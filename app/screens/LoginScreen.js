import { Image, StyleSheet } from "react-native";
import React from "react";
import * as Yup from "yup";
import Screen from "./../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";

const initialValues = { email: "", password: "" };

const validationSchema = Yup.object().shape({
  email: Yup.string().required().label("Email").email(),
  password: Yup.string().min(6).required().label("Password"),
});

const onSubmit = (values) => {
  console.log(values);
};

const LoginScreen = () => {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <AppForm
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Login" />
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },

  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
