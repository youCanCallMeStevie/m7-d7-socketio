import axios from "axios";
import authAxios from "./authAxios";
const { REACT_APP_URI_DEV } = process.env;

export const getAllSkills = async () => {
  try {
    const res = await axios.get(`${REACT_APP_URI_DEV}/api/users/skills`);
    console.log(res);
    if (res.status == 200) return await res.data;
  } catch (err) {
    console.log(err);
  }
};

export const postNewSkill = async (skill) => {
  try {
    const res = await authAxios.post(`${REACT_APP_URI_DEV}/api/users/skills`, skill);
    console.log(res);
    if (res.status == 201) return await res.data;
  } catch (err) {
    console.log(err);
  }
};

export const editSkill = async (id, skill) => {
  try {
    const res = await authAxios.put(
      `${REACT_APP_URI_DEV}/api/users/skills/${id}`,
      skill
    );
    if (res.status == 201) return await res.data;
  } catch (err) {
    console.log(err);
  }
};

export const deleteSkill = async (id) => {
  try {
    const res = await authAxios.delete(`${REACT_APP_URI_DEV}/api/users/skills/${id}`);
    if (res.status == 201) return await res;
  } catch (err) {
    console.log(err);
  }
};
