/* eslint-disable */
import React, { useEffect } from 'react';
import { useUsers } from '../UsersContext';
import styles from './UserInfo.module.scss';

function UserInfo({ userId }) {
  const { usersData, setUsersData, activeUserId, setActiveUserId } = useUsers();

  const user = usersData.find((user) => +user.userId === +userId);
  console.log(user); // тут все правильно приходит

  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    email: '',
  });

  useEffect(() => {
    setFormData({
      name: '',
      phone: '',
      email: '',
    });
  }, [activeUserId]);

  function handleChange(event) {
    setFormData((prevFormData) => {
      console.log(event.target.name);
      console.log(event.target.value);
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  console.log(formData); // тут неправильно

  return (
    <div>
      <form className={styles.UserEditForm}>
        <input
          type="text"
          placeholder="Name"
          onChange={handleChange}
          name="name"
          value={formData.name || user.name}
        ></input>
        <input
          type="text"
          placeholder="Phone"
          onChange={handleChange}
          name="phone"
          value={formData.phone || user.phone}
        ></input>
        <input
          type="text"
          placeholder="Email"
          onChange={handleChange}
          name="email"
          value={formData.email || user.email}
        ></input>
      </form>
    </div>
  );
}

export default UserInfo;
