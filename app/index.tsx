import React, { useState } from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import RecipeForm from "./components/RecipeForm";
import RecipeSuggestions from "./components/RecipeSuggestions";

export default function Index() {
  const [suggestions, setSuggestions] = useState<string>("");

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.header}>🍠 Swad AI 🌶️</Text>
        <RecipeForm setSuggestions={setSuggestions} />
        {suggestions ? <RecipeSuggestions suggestions={suggestions} /> : null}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
});

