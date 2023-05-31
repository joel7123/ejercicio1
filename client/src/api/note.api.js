import axios from "axios";

export const getLists = async () =>
  await axios.get("http://localhost:4000/list");
