/* eslint-disable react/prop-types */
import React from 'react';
import styles from './Modal.module.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useUsers } from '../UsersContext';

function Modal({ showModal, closeModal, children }) {
  Modal.propTypes = {
    children: PropTypes.node.isRequired,
  };

  const { setActiveUserId } = useUsers();

  return (
    <div
      className={classNames(styles.Modal, { [styles.Modal_show]: showModal })}
      onClick={() => {
        closeModal();
        setActiveUserId(-1);
      }}
    >
      <div
        className={styles.Modal__content}
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;
