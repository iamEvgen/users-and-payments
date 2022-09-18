/* eslint-disable */

import React from 'react';
import { useUsers } from '../UsersContext';
import styles from './Users.module.scss';
import classNames from 'classnames';
import ModuleBox from '../components/Modal';
import UserInfo from '../components/UserInfo';

function Users() {
  const { usersData } = useUsers();
  const male = require(`../icons/male.png`);
  const female = require(`../icons/female.png`);
  const list = require(`../icons/list.png`);

  const [showModal, setShowModal] = React.useState(false);
  const [modalInfo, setModalInfo] = React.useState('');
  const [activeUser, setActiveUser] = React.useState({});

  function getUser(userId) {
    return usersData.find((user) => +user.userId === +userId);
  }

  function editUser(userId) {
    setShowModal(true);
    const user = getUser(userId);
    console.log(user);
    setActiveUser(user);
    setModalInfo(<UserInfo user={activeUser} />);
  }

  function showToDos(userId) {
    setShowModal(true);
    setModalInfo(<div>show ToDos</div>);
  }

  const userNames = usersData.map((user) => {
    let genderIcon;
    let altIcon;
    if (user.gender === 'male') {
      genderIcon = male;
      altIcon = 'male icon';
    } else {
      genderIcon = female;
      altIcon = 'female icon';
    }

    return (
      <div key={user.userId} className={styles.User}>
        <div className={styles.User__name}>{user.name}</div>
        <img
          onClick={() => {
            editUser(user.userId);
          }}
          className={classNames(styles.User__icon, styles.User__personIcon)}
          src={genderIcon}
          alt={altIcon}
        />
        <img
          onClick={() => {
            showToDos(user.userId);
          }}
          className={styles.User__icon}
          src={list}
          alt="list icon"
        />
      </div>
    );
  });

  return (
    <main className={styles.Container}>
      <div className={styles.Box}>{userNames}</div>
      <ModuleBox
        showModal={showModal}
        closeModal={() => {
          setShowModal(false);
        }}
      >
        {modalInfo}
      </ModuleBox>
    </main>
  );
}

export default Users;
