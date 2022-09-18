/* eslint-disable react/prop-types */
import React from 'react';
import styles from './Modal.module.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function ModuleBox({ showModal, closeModal, children }) {
  ModuleBox.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return (
    <div
      className={classNames(styles.Modal, { [styles.Modal_show]: showModal })}
      onClick={() => {
        closeModal(false);
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

export default ModuleBox;
