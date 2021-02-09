import React, { useState, useEffect } from "react";
import { fetchUser, fetchAllUsers } from "../utils";

const withUser = (WrappedComponent) => (props) => {
  const [user, setUser] = useState("");
  const [allUsers, setAllUsers] = useState([]);

  const setUpUser = async () => {
    try {
      const users = await fetchAllUsers();
      const user = await fetchUser();
      setUser(user);
        setAllUsers(users);
        console.log(user)
    } catch (err) {}
  };
  useEffect(() => {
    setUpUser();
  }, []);

  return <WrappedComponent currentUser={user} allUsers={allUsers} {...props} />;
};

export default withUser;
