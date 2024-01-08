import React, { useState, useEffect } from 'react';
import './UsersPages.css';
import { Link } from 'react-router-dom';

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/users');
        if (!response.ok) {
          throw new Error(`Failed to fetch users: ${response.statusText}`);
        }

        const usersData = await response.json();
        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching users:', error.message);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (userId) => {
    try {
      if (!userId) {
        console.error('Error: User ID is undefined or null.');
        return;
      }

      const response = await fetch(`http://localhost:3000/users/${userId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
        console.log(`User with ID ${userId} deleted successfully.`);
      } else {
        console.error(`Error deleting user with ID ${userId}: ${response.statusText}`);
      }
    } catch (error) {
      console.error('Error deleting user:', error.message);
    }
  };

  const handleUpdate = async (userId) => {
    try {
      if (!userId) {
        console.error('Error: User ID is undefined or null');
        return;
      }
      const userToUpdate = users.find((user) => user._id === userId);
      if (!userToUpdate) {
        console.error(`Error: user with ID ${userId} not found`);
        return;
      }
      console.log('User to update:', userToUpdate);

      const updatedUser = { ...userToUpdate, name: 'New Name' };

      const response = await fetch(`http://localhost:3000/users/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedUser),
      });

      if (response.ok) {
        const updatedUserData = await response.json();
        setUsers((prevUsers) =>
          prevUsers.map((user) => (user._id === userId ? updatedUserData : user))
        );
        console.log(`User with ID ${userId} updated successfully.`);
      } else {
        console.error(`Error updating user with ID ${userId}: ${response.statusText}`);
        const errorData = await response.json();
        console.error('Server error details:', errorData);
      }
    } catch (error) {
      console.error('Unexpected server response:', error);
    }
  }
  return (
    <>
      <div className="top-container">
        <h2>Participants list</h2>
        <div className="link-container">
          <Link to="/registrationForm">Add user</Link>
          <Link to="/">Back to home page</Link>
        </div>
      </div>
      <div className="user-table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Surname</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.surname}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td className="action-buttons">
                  <button onClick={() => handleDelete(user._id)}>Delete</button>
                  <button onClick={() => handleUpdate(user._id)}>Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UsersPage;

