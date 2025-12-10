import React, { useEffect, useState } from 'react'
const BASE_URL = 'https://api.escuelajs.co/api/v1'
// import floppa from '/fake-store/src/img/floppa.jpg'

export default function Products() {
  const [users, setUsers] = useState([]);

  async function fetchAPI() {
    try {
      const response = await fetch(`${BASE_URL}/users`);
      const data = await response.json();

      setUsers(data);
      return data;
    } catch(err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchAPI();
  }, [])
  console.log(users);

  function checkAvatar (avatar) {
    if (avatar.includes('jpg')) {
      return avatar
    } else {
      return "/src/img/floppa.jpg"
    }
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <td>Avatar</td>
            <td>ID</td>
            <td>Email</td>
            <td>Name</td>
            <td>Role</td>
          </tr>
        </thead>
        <tbody>
            {users.map((user) => (
          <tr className='bg-gray-400 my-10'>
            <td className='h-[60px] w-[60px]'><img src={checkAvatar(user.avatar)} alt="avatar"/></td>
            <td>{user.id}</td>
            <td>{user.email}</td>
            <td>{user.name}</td>
            <td>{user.role}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
