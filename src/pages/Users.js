import React from 'react';
import { useUsers } from '../UsersContext';
import styles from './Users.module.scss';

function Users() {
  const { usersData } = useUsers();
  console.log(usersData);

  const userNames = usersData.map((user) => {
    return (
      <div key={user.userId} className={styles.Box__user}>
        {user.name}
      </div>
    );
  });

  return (
    <main className={styles.Container}>
      <div className={styles.Box}>{userNames}</div>
    </main>
  );
}

export default Users;
