import axios from "axios";

export const axiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
    authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // Get latest token
  console.log("TO KEEP TRACK OF HOW MANY TIMES THIS RUNS");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
