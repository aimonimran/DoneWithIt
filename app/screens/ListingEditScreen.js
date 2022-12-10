import { StyleSheet } from "react-native";
import React from "react";
import * as Yup from "yup";
import Screen from "./../components/Screen";
import {
  AppForm,
  SubmitButton,
  AppFormField as FormField,
  AppFormPicker as Picker,
} from "./../components/forms";
import CategoryPickerItem from "../components/CategoryPickerItem";

const initialValues = {
  title: "",
  price: "",
  description: "",
  category: null,
};

const validationSchema = Yup.object().shape({
  title: Yup.string().min(1).required().label("Title"),
  price: Yup.number().min(1).max(10000).required().label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const onSubmit = (values) => {
  console.log(values);
};

const categories = [
  { label: "Furniture", value: 1, backgroundColor: "tomato", icon: "apps" },
  { label: "Cars", value: 2, backgroundColor: "orange", icon: "car" },
  {
    label: "Camera",
    value: 3,
    backgroundColor: "pink",
    icon: "camera",
  },
  { label: "Games", value: 4, backgroundColor: "violet", icon: "cards" },
  { label: "Clothing", value: 5, backgroundColor: "brown", icon: "tshirt-v" },
  {
    label: "Sports",
    value: 6,
    backgroundColor: "purple",
    icon: "baseball",
  },
  {
    label: "Movies & Music",
    value: 7,
    backgroundColor: "grey",
    icon: "movie-open-outline",
  },
  { label: "Books", value: 8, backgroundColor: "gold", icon: "bookshelf" },
  { label: "Others", value: 9, backgroundColor: "silver", icon: "lock" },
];

const ListingEditScreen = () => {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <FormField maxLength={255} name="title" placeholder="Title" />
        <FormField
          maxLength={8}
          keyboardType="numeric"
          name="price"
          placeholder="Price"
          width={120}
        />
        <Picker
          items={categories}
          name="category"
          placeholder="Category"
          PickerItemComponent={CategoryPickerItem}
          numberOfColumns={3}
          width="50%"
        />
        <FormField
          multiline
          numberOfLines={3}
          maxLength={255}
          name="description"
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ListingEditScreen;
