import axios from "axios";
import authAxios from "./authAxios";
const { REACT_APP_URI_DEV } = process.env;

export const getAllUsers = async () => {
  try {
    const res = await axios.get(`${REACT_APP_URI_DEV}/api/users`);
    console.log(res);
    if (res.status == 200) return await res.data;
  } catch (err) {
    console.log(err);
  }
};

export const getUserById = async (userId) => {
  try {
    const res = await axios.get(`${REACT_APP_URI_DEV}/api/users/${userId}`);
    console.log(res);
    if (res.status == 200) return await res.data;
  } catch (err) {
    console.log(err);
  }
};

export const getCurrentUser = async () => {
  try {
    const res = await authAxios.get(`${REACT_APP_URI_DEV}/api/users/me`);
    console.log(res);
    if (res.status == 200) return await res.data;
  } catch (err) {
    console.log(err);
  }
};

export const getCurrentProfile = async (username) => {
  try {
    const res = await axios.get(`${REACT_APP_URI_DEV}/api/users/${username}`);
    if (res.status == 200) return await res.data;
  } catch (err) {
    console.log(err);
  }
};

export const registerUser = async (credentials) => {
  try {
    const res = await axios.post(`${REACT_APP_URI_DEV}/api/users`, credentials);
    if (res.status == 200) return await res.data;
  } catch (err) {
    console.log(err);
  }
};

export const uploadProfilePicture = async (picture) => {
  const pictureFORM = new FormData();
  pictureFORM.append("image", picture);
  try {
    const res = await authAxios.post(
      `${REACT_APP_URI_DEV}/api/users/upload`,
      pictureFORM
    );
    console.log(res);
    if (res.status == 200) return await res.data;
  } catch (err) {
    console.log(err);
  }
};

export const editUser = async (credentials) => {
  try {
    const res = await axios.put(`${REACT_APP_URI_DEV}/api/users`, credentials);
    if (res.status == 200) return await res.data;
  } catch (err) {
    console.log(err);
  }
};

export const followUser = async (id) => {
  try {
    const res = await axios.post(`${REACT_APP_URI_DEV}/api/users/follow/${id}`);
    console.log(res);
    if (res.status == 201) return await res.data;
  } catch (err) {
    console.log(err);
  }
};

export const unFollowUser = async (id) => {
  try {
    const res = await axios.put(
      `${REACT_APP_URI_DEV}/api/users/unfollow/${id}`
    );
    if (res.status == 201) return await res.data;
  } catch (err) {
    console.log(err);
  }
};

export const likeComment = async (id) => {
  try {
    const res = await axios.post(`${REACT_APP_URI_DEV}/api/posts/like/${id}`);
    if (res.status == 201) return await res.data;
  } catch (err) {
    console.log(err);
  }
};

export const unLikeComment = async (id) => {
  try {
    const res = await axios.put(`${REACT_APP_URI_DEV}/api/posts/unlike/${id}`);
    if (res.status == 201) return await res.data;
  } catch (err) {
    console.log(err);
  }
};
