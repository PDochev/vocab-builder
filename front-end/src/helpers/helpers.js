import axios from "axios";

const baseURL = "http://localhost:3000/words/";

const handleError =
  (fn) =>
  (...params) =>
    fn(...params).catch((error) => {
      console.log(error);
    });

export const api = {
  getWord: handleError(async (id) => {
    const res = await axios.get(baseURL + id);
    return res.data;
  }),
  getWords: handleError(async () => {
    const res = await axios.get(baseURL);
    return res.data;
  }),
  deleteWord: handleError(async (id) => {
    const res = await axios.delete(baseURL + id);
    return res.data;
  }),
  createWord: handleError(async (payLoad) => {
    const res = await axios.post(baseURL, payLoad);
    return res.data;
  }),
  updateWord: handleError(async (payLoad) => {
    const res = await axios.put(baseURL + payLoad._id, payLoad);
    return res.data;
  }),
};
