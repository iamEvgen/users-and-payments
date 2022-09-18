/* eslint-disable */
import React from 'react';

function UserInfo({ user }) {
  const [formData, setFormData] = React.useState({
    name: user.name,
    phone: user.phone,
    email: user.email,
  });

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Name"
          onChange={handleChange}
          name="name"
          value={formData.name}
        ></input>
        <input
          type="text"
          placeholder="Phone"
          onChange={handleChange}
          name="phone"
          value={formData.phone}
        ></input>
        <input
          type="text"
          placeholder="Email"
          onChange={handleChange}
          name="email"
          value={formData.email}
        ></input>
      </form>
    </div>
  );
}

export default UserInfo;
