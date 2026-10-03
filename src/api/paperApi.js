import axios from "axios";

// GET ALL GENERATED PAPERS
export const getPaper = async () => {
  const res = await axios.get("/api/papers");
  return res.data;
};