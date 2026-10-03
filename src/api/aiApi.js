import axios from "axios";

export const generateAIQuestions = async (data) => {
  const res = await axios.post("/api/ai/generate", data);
  return res.data;
};