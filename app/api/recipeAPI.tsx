import axios from "axios";

const fetchRecipeSuggestions = async (
  ingredients: string[],
  preferences: string,
  language: string
): Promise<string> => {
  try {
    const response = await axios.post(
      `https://indian-essence-backend.onrender.com/api/recipes/suggest-recipes`,
      {
        ingredients,
        preferences,
        language, // Include language in the request payload
      }
    );
    return response.data.suggestions;
  } catch (error) {
    console.error("Error fetching recipe suggestions:", error);
    throw error;
  }
};

export default fetchRecipeSuggestions;