import React, { useState, useEffect } from "react";
import { useGetUsersQuery, useAddUserMutation } from "./ApiSlice";

export default function UsersList() {
  const { data, error, isLoading } = useGetUsersQuery();
  const [addUser] = useAddUserMutation();

  const [users, setUsers] = useState([]);
  const [name, setName] = useState(""); // ✅ input ke liye state

  useEffect(() => {
    if (data) setUsers(data);
  }, [data]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error occurred</p>;

  const handleAdd = async () => {
    if (!name.trim()) return alert("Please enter a name"); //  empty input na ho

    const newUser = { name, email: `${name.toLowerCase()}@test.com` };
    setUsers([...users, newUser]); //  UI pe turant add kar diya
    await addUser(newUser);        //  API pe bhi bhej diya
    setName(""); //  input clear kar diya
  };

  return (
    <div>
      <h2>Users</h2>

      {/* Input field */}
      <input
        type="text"
        placeholder="Enter user name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: "5px", marginRight: "10px" }}
      />
      <button onClick={handleAdd}>Add User</button>

      <div style={{ marginTop: "20px" }}>
        {users.map((user, index) => (
          <p key={user.id || index}>{user.name}</p>
        ))}
      </div>
    </div>
  );
}
