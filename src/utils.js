// EXPERIENCES:

//     - GET https://striveschool-api.herokuapp.com/api/profile/:userId/experiences
//     Get user experiences
//     - POST https://striveschool-api.herokuapp.com/api/profile/:userId/experiences
//     Create an experience. NOTE: every user is allowed to mess only with his own experiences
//     - GET https://striveschool-api.herokuapp.com/api/profile/:userId/experiences/:expId
//     Get a specific experience
//     - PUT https://striveschool-api.herokuapp.com/api/profile/:userId/experiences/:expId
//     Get a specific experience
//     - DELETE https://striveschool-api.herokuapp.com/api/profile/:userId/experiences/:expId
//     Get a specific experience

//     ---------------------------------------------------------------------------

//     EXPERIENCE Model:
//     {
//         "_id": "5d925e677360c41e0046d1f5",  //server generated
//         "role": "CTO",
//         "company": "Strive School",
//         "startDate": "2019-06-16",
//         "endDate": "2019-06-16", //could be null
//         "description": "Doing stuff here and there",
//         "area": "Berlin",
//         "username": "admin",  //server generated
//         "createdAt": "2019-09-30T19:58:31.019Z",  //server generated
//         "updatedAt": "2019-09-30T19:58:31.019Z",  //server generated
//         "__v": 0  //server generated
//         "image": ... //server generated on upload
//     }

const {
  REACT_APP_PROFILE,
  REACT_APP_TOKEN,
  REACT_APP_PROFILELIST,
  REACT_APP_POSTS,
} = process.env;

//Users functions
//GET current user
export const fetchUser = async () => {
  try {
    const res = await fetch(REACT_APP_PROFILE, {
      headers: {
        Authorization: "Bearer " + REACT_APP_TOKEN,
      },
    });
    const user = await res.json();
    if (res.ok) {
      console.log("all good");
      return user;
    } else {
      console.log("there is an error");
    }
  } catch (err) {
    console.log("there is an error with fetching user");
  }
};

//GET all users
export const fetchAllUsers = async () => {
  try {
    const res = await fetch(REACT_APP_PROFILELIST, {
      headers: {
        Authorization: "Bearer " + REACT_APP_TOKEN,
      },
    });
    if (res.ok) {
      const users = await res.json();
      return users;
    } else {
      console.log("there is an error");
    }
  } catch (err) {
    console.log("there is an error");
  }
};

//EXPERIENCE FUNCTIONS
//GET all experiences
export const fetchExperiences = async (id) => {
  try {
    const res = await fetch(REACT_APP_PROFILELIST + `/${id}/experiences`, {
      headers: {
        Authorization: "Bearer " + REACT_APP_TOKEN,
      },
    });
    if (res.ok) {
      const experiences = await res.json();
      console.log(experiences);
      return experiences;
    } else {
      console.log("there is an error with fetching experiences");
    }
  } catch (err) {
    console.log("there is an error");
  }
};

//POST experience
export const postExperiences = async (id, experience) => {
  console.log(experience);

  try {
    const res = await fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`,
      {
        method: "POST",
        headers: new Headers({
          Authorization: "Bearer " + REACT_APP_TOKEN,
          "Content-Type": "application/json",
        }),
        body: JSON.stringify(experience),
      }
    );
    if (res.ok) {
      return res;
    } else {
      console.log("there is an error with posting experiences");
    }
  } catch (err) {
    console.log("there is an error", err);
  }
};

//PUT experience
export const editExperience = async (id, expId, experience) => {
  console.log(experience);

  try {
    const res = await fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences/${expId}`,
      {
        method: "PUT",
        headers: new Headers({
          Authorization: "Bearer " + REACT_APP_TOKEN,
          "Content-Type": "application/json",
        }),
        body: JSON.stringify(experience),
      }
    );
    if (res.ok) {
      return res;
    } else {
      console.log("there is an error with posting experiences");
    }
  } catch (err) {
    console.log("there is an error", err);
  }
};

//DELETE experience
export const deleteExperience = async (id, expId) => {
  try {
    const res = await fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences/${expId}`,
      {
        method: "DELETE",
        headers: new Headers({
          Authorization: "Bearer " + REACT_APP_TOKEN,
          "Content-Type": "application/json",
        }),
      }
    );
    if (res.ok) {
      return res;
    } else {
      console.log("there is an error with delete");
    }
  } catch (err) {
    console.log("there is an error", err);
  }
};

//POSTS FUNCTIONS

//GET all posts
export const fetchPosts = async () => {
  try {
    const res = await fetch(REACT_APP_POSTS, {
      headers: {
        Authorization: "Bearer " + REACT_APP_TOKEN,
      },
    });
    const posts = await res.json();
    if (res.ok) {
      console.log("all good");
      return posts;
    } else {
      console.log("there is an error with posts");
    }
  } catch (err) {
    console.log("there is an error with fetching posts");
  }
};

//POST a single post
export const postPost = async (text) => {
  try {
    const res = await fetch(`${REACT_APP_POSTS}`, {
      method: "POST",
      headers: new Headers({
        Authorization: "Bearer " + REACT_APP_TOKEN,
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(text),
    });
    if (res.ok) {
      return res;
    } else {
      console.log("there is an error with posting experiences");
    }
  } catch (err) {
    console.log("there is an error", err);
  }
};

//PUT a single post -> note: you can edit only posts where the userId of the post matched the currentUserId
export const editPost = async (id, text) => {
  try {
    const res = await fetch(`${REACT_APP_POSTS}/${id}`, {
      method: "PUT",
      headers: new Headers({
        Authorization: "Bearer " + REACT_APP_TOKEN,
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(text),
    });
    if (res.ok) {
      return res;
    } else {
      console.log("there is an error with editing post");
    }
  } catch (err) {
    console.log("there is an error", err);
  }
};

//DELETE a single post -> note: you can delete only posts where the userId of the post matched the currentUserId
export const deletePost = async (id) => {
  try {
    const res = await fetch(`${REACT_APP_POSTS}/${id}`, {
      method: "DELETE",
      headers: new Headers({
        Authorization: "Bearer " + REACT_APP_TOKEN,
        "Content-Type": "application/json",
      }),
    });
    if (res.ok) {
      return res;
    } else {
      console.log("there is an error with delete");
    }
  } catch (err) {
    console.log("there is an error", err);
  }
};

// https://striveschool-api.herokuapp.com/api/profile/{userId}/picture

//IMAGES FUNCTIONS

//POST user image
export const postUserImage = async (id, image) => {
  try {
    const res = await fetch(`${REACT_APP_PROFILELIST}/${id}/picture`, {
      method: "POST",
      headers: new Headers({
        Authorization: "Bearer " + REACT_APP_TOKEN,
      }),
      body: image,
    });
    if (res.ok) {
      return res;
    } else {
      console.log("there is an error with posting image");
    }
  } catch (err) {
    console.log("there is an error", err);
  }
};

//POST user image
export const postPostImage = async (id, image) => {
  const formdata = new FormData();
  formdata.append("post", image);

  try {
    const res = await fetch(`${REACT_APP_POSTS}/${id}`, {
      method: "POST",
      headers: new Headers({
        Authorization: "Bearer " + REACT_APP_TOKEN,
      }),
      body: formdata,
    });
    if (res.ok) {
      return res;
    } else {
      console.log("there is an error with posting image");
    }
  } catch (err) {
    console.log("there is an error", err);
  }
};

//POST user image
export const postExperienceImage = async (userId, expId, image) => {
  const formdata = new FormData();
  formdata.append("experience", image);

  try {
    const res = await fetch(
      `${REACT_APP_PROFILELIST}/${userId}/experiences/${expId}/picture`,
      {
        method: "POST",
        headers: new Headers({
          Authorization: "Bearer " + REACT_APP_TOKEN,
        }),
        body: formdata,
      }
    );
    if (res.ok) {
      return res;
    } else {
      console.log("there is an error with posting image");
    }
  } catch (err) {
    console.log("there is an error", err);
  }
};

export const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
