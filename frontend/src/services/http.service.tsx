import axios from "axios";

const baseUrl = "http://localhost:8000";

export const login = async (body: { email: string; password: string }) => {
  const response = await axios.post(`${baseUrl}/user/login`, body);
  return response;
};
