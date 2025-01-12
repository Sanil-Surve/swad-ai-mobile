import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

interface RecipeSuggestionsProps {
  suggestions: string;
}

const RecipeSuggestions: React.FC<RecipeSuggestionsProps> = ({ suggestions }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Recipe Suggestion</Text>
      <ScrollView style={styles.scrollContainer}>
        <Text style={styles.suggestions}>{suggestions}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    padding: 20,
    backgroundColor: "#f9f9f9",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
  },
  scrollContainer: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    padding: 10,
  },
  suggestions: {
    fontSize: 14,
    lineHeight: 20,
    color: "#555",
  },
});

export default RecipeSuggestions;


