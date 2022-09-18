import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import usersObject from './assets/usersObject';

const UsersContext = React.createContext();

export function useUsers() {
  return useContext(UsersContext);
}

export function UserProvider({ children }) {
  const [usersData, setUsersData] = useState(usersObject);

  UserProvider.propTypes = {
    children: PropTypes.node.isRequired,
  }

  return (
    <UsersContext.Provider value={{ usersData, setUsersData }}>
      {children}
    </UsersContext.Provider>
  );
}