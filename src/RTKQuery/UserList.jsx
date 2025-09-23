import React, { useState, useEffect } from "react";
import { useGetUsersQuery, useAddUserMutation } from "./ApiSlice";

export default function UsersList() {
  const { data, error, isLoading } = useGetUsersQuery();
  const [addUser] = useAddUserMutation();

  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    if (data) setUsers(data);
  }, [data]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error occurred</p>;

  const handleAdd = async () => {
    if (!name.trim()) return alert("Please enter a name");

    const newUser = {
      id: Date.now(), //  unique id banayi
      name,
      email: `${name.toLowerCase()}@test.com`,
    };

    setUsers([...users, newUser]); 
    await addUser(newUser);       
    setName(""); 
  };

  return (
    <div>
      <h2>Users</h2>

      <input
        type="text"
        placeholder="Enter user name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: "5px", marginRight: "10px" }}
      />
      <button onClick={handleAdd}>Add User</button>

      <div style={{ marginTop: "20px" }}>
        {users.map((user) => (
          <p key={user.id}>{user.name}</p> //  ab id unique hamesha
        ))}
      </div>
    </div>
  );
}
