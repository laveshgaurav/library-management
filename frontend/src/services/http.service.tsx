import axios from "axios";

const baseUrl = "http://localhost:8000";

export const login = async (body: { email: string; password: string }) => {
  const response = await axios.post(`${baseUrl}/user/login`, body);
  return response;
};

export const register = async (body: {
  email: string;
  password: string;
  name: string;
}) => {
  const response = await axios.post(`${baseUrl}/user/register`, body);
  return response;
};

export const getBookList = async () => {
  const response = await axios.get(`${baseUrl}/book`);
  return response;
};

export const getBurrowedBooks = async () => {
  const token = localStorage.getItem("token");
  const response = await axios.get(`${baseUrl}/user/borrowed-books`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};

export const postBurrowBook = async (id: string) => {
  const token = localStorage.getItem("token");
  const response = await axios.get(`${baseUrl}/user/borrow-book/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};

export const getUserDetails = async () => {
  const token = localStorage.getItem("token");
  const response = await axios.get(`${baseUrl}/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};

export const postReturnBook = async (id: string) => {
  const token = localStorage.getItem("token");
  const response = await axios.get(`${baseUrl}/user/return/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};
