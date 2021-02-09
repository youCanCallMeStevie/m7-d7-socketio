import axios from "axios";
import authAxios from "./authAxios";
const { REACT_APP_URI_DEV } = process.env;

export const login = async (credentials) => {
  try {
    const res = await authAxios.post(
      `${REACT_APP_URI_DEV}/api/auth/login`,
      credentials
    );
    if (res.status == 200) return await res.data;
  } catch (err) {
    console.log(err);
  }
};

export const logout = async () => {
  try {
    const res = await authAxios.post(`${REACT_APP_URI_DEV}/api/auth/logout`);
    if (res.status == 200) return await res.data;
  } catch (err) {
    console.log(err);
  }
};
