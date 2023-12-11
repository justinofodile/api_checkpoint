import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "./UserCard";

const UserList = () => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);

  const getUser = () => {
    //Defining the API URL
    const userApiUrl = "https://jsonplaceholder.typicode.com/users";

    // Making a get request using axios
    axios
      .get(userApiUrl)
      .then((response) =>
        // Updating state with the fetched data
        setUsers(response.data)
      )
      .catch((err) =>
        // Handling error
        console.log(err)
      )
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getUser();
  }, []);

  if (loading) {
    return <div className="spinner"></div>;
  }

  // console.log(users.data);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mx-16 mt-10">
      {/* Using map to return all the users and also displaying them */}
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
