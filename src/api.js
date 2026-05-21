import axios from "axios";

const API_URL = "http://localhost:8000";

export const reviewCode = async (code, language) => {
  const response = await axios.post(`${API_URL}/review`, {
    code: code,
    language: language,
  });
  return response.data;
};