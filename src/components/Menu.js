import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Menu.module.scss';

function Menu() {
  return (
    <nav className={styles.Menu}>
      <ul className={styles.Menu__box}>
        <li className={styles.Menu__link}>
          <Link className={styles.Menu__linkInside} to="/">Пользователи</Link>
        </li>
        <li className={styles.Menu__link}>
          <Link className={styles.Menu__linkInside} to="/payments">Платежи</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
