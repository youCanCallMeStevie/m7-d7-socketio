import axios from "axios";
import authAxios from "./authAxios";
const { REACT_APP_URI_DEV } = process.env;

export const getAllPosts = async () => {
  try {
    const res = await axios.get(`${REACT_APP_URI_DEV}/api/posts`);
    console.log(res);
    if (res.status == 200) return await res.data;
  } catch (err) {
    console.log(err);
  }
};

export const postNewPost = async (post) => {
  try {
    const res = await authAxios.post(`${REACT_APP_URI_DEV}/api/posts`, post);
    console.log(res);
    if (res.status == 201) return await res;
  } catch (err) {
    console.log(err);
  }
};

export const editPost = async (id, post) => {
  try {
    const res = await authAxios.put(
      `${REACT_APP_URI_DEV}/api/posts/${id}`,
      post
    );
    if (res.status == 200) return await res;
  } catch (err) {
    console.log(err);
  }
};

export const deletePost = async (id) => {
  try {
    const res = await authAxios.delete(`${REACT_APP_URI_DEV}/api/posts/${id}`);
    if (res.status == 200) return await res.data;
  } catch (err) {
    console.log(err);
  }
};

export const uploadPicture = async (id, picture) => {
  console.log(id);
  console.log(picture);
  const pictureFORM = new FormData();
  pictureFORM.append("image", picture);
  try {
    const res = await authAxios.post(
      `${REACT_APP_URI_DEV}/api/posts/${id}/upload`,
      pictureFORM
    );
    console.log(res);
    if (res.status == 200) return await res.data;
  } catch (err) {
    console.log(err);
  }
};
