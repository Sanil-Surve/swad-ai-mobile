
import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import fetchRecipeSuggestions from "../api/recipeAPI";

interface RecipeFormProps {
  setSuggestions: (suggestions: string) => void;
}

const RecipeForm: React.FC<RecipeFormProps> = ({ setSuggestions }) => {
  const [ingredients, setIngredients] = useState<string>("");
  const [preferences, setPreferences] = useState<string>("");
  const [language, setLanguage] = useState<string>("English");

  // Dropdown state management
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: "English", value: "English" },
    { label: "Hindi", value: "Hindi" },
    { label: "Marathi", value: "Marathi" },
    { label: "Tamil", value: "Tamil" },
    { label: "Gujarati", value: "Gujarati" },
    { label: "Bengali", value: "Bengali" },
  ]);

  const handleSubmit = async () => {
    const ingredientsList = ingredients.split(",").map((item) => item.trim());
    const suggestions = await fetchRecipeSuggestions(ingredientsList, preferences, language);
    setSuggestions(suggestions);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Ingredients (e.g., chicken, paneer):</Text>
      <TextInput
        style={styles.input}
        value={ingredients}
        onChangeText={setIngredients}
        placeholder="Enter ingredients"
      />
      <Text style={styles.label}>Preferences (e.g., spicy, sweet):</Text>
      <TextInput
        style={styles.input}
        value={preferences}
        onChangeText={setPreferences}
        placeholder="Enter preferences"
      />
      <Text style={styles.label}>Language:</Text>
      <DropDownPicker
        open={open}
        value={language}
        items={items}
        setOpen={setOpen}
        setValue={setLanguage}
        setItems={setItems}
        placeholder="Select a language"
        containerStyle={styles.dropdown}
        textStyle={styles.dropdownText}
      />
      <Button title="Generate Recipes" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginBottom: 12,
  },
  dropdown: {
    marginBottom: 20,
    zIndex: 1000, // To ensure the dropdown renders above other elements
  },
  dropdownText: {
    fontSize: 16,
  },
});

export default RecipeForm;