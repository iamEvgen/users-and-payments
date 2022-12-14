import React, { useEffect } from 'react';
import { useUsers } from '../UsersContext';
import styles from './UserInfo.module.scss';
import PropTypes from 'prop-types';

function UserInfo({ userId, closeModal }) {
  const { usersData, setUsersData, activeUserId, setActiveUserId } = useUsers();

  UserInfo.propTypes = {
    userId: PropTypes.number,
    closeModal: PropTypes.func,
  };

  const user = usersData.find((user) => +user.userId === +userId);

  const [formData, setFormData] = React.useState({
    name: user.name,
    phone: user.phone,
    email: user.email,
  });

  useEffect(() => {
    setFormData({
      name: user.name,
      phone: user.phone,
      email: user.email,
    });
  }, [activeUserId]);

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function saveChanges() {
    setUsersData((prevData) => {
      const newUsersData = JSON.parse(JSON.stringify(prevData));
      newUsersData.map((user) => {
        if (+user.userId === +activeUserId) {
          user.name = formData.name;
          user.phone = formData.phone;
          user.email = formData.email;
        }
      });
      return newUsersData;
    });
    closeModal();
    setActiveUserId(-1);
  }

  return (
    <div>
      <form
        className={styles.UserEditForm}
        onSubmit={(event) => {
          event.preventDefault();
          saveChanges();
        }}
      >
        <input
          type="text"
          placeholder="Name"
          onChange={handleChange}
          name="name"
          value={formData.name}
          minLength="3"
          required
        ></input>
        <input
          type="phone"
          placeholder="Phone"
          onChange={handleChange}
          name="phone"
          value={formData.phone}
          minLength="4"
          required
        ></input>
        <input
          type="email"
          placeholder="Email"
          onChange={handleChange}
          name="email"
          value={formData.email}
          minLength="5"
          required
        ></input>
        <button>??????????????????</button>
      </form>
    </div>
  );
}

export default UserInfo;
