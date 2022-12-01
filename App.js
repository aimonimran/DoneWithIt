import { useState } from "react";
import { Switch } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import Card from "./app/components/Card";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import AppText from "./app/components/AppText";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
];

export default function App() {
  const [category, setCategory] = useState(categories[0]);
  return (
    <AppPicker
      selectedItem={category}
      onSelectedItem={(item) => setCategory(item)}
      items={categories}
      placeholder="Category"
      icon="apps"
    />
  );
}
