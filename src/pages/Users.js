import React from 'react';
import { useUsers } from '../UsersContext';
import styles from './Users.module.scss';
import classNames from 'classnames';
import Modal from '../components/Modal';
import UserInfo from '../components/UserInfo';
import ToDo from '../components/ToDo';

function Users() {
  const { usersData, setActiveUserId } = useUsers();
  const male = require(`../icons/male.png`);
  const female = require(`../icons/female.png`);
  const list = require(`../icons/list.png`);

  const [showModal, setShowModal] = React.useState(false);
  const [modalInfo, setModalInfo] = React.useState('');

  function editUser(userId) {
    setActiveUserId(userId);
    setModalInfo(
      <UserInfo
        closeModal={() => {
          setShowModal(false);
        }}
        userId={userId}
      />
    );
    setShowModal(true);
  }

  function showToDos(userId) {
    setActiveUserId(userId);
    setModalInfo(<ToDo userId={userId} />);
    setShowModal(true);
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
      <Modal
        showModal={showModal}
        closeModal={() => {
          setShowModal(false);
        }}
      >
        {modalInfo}
      </Modal>
    </main>
  );
}

export default Users;
