/* eslint-disable */

import React from 'react';
import { useUsers } from '../UsersContext';
import styles from './Payments.module.scss';
import Modal from '../components/Modal';

function Payments() {
  const { usersData } = useUsers();
  const [showModal, setShowModal] = React.useState(false);
  const [currentPayment, setCurrentPayment] = React.useState({
    username: '',
    paymentId: '',
    amount: '',
    date: '',
  });

  const allPayments = usersData.reduce((payments, user) => {
    return [...payments, ...user.payments];
  }, []);

  allPayments.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else if (a.date > b.date) {
      return -1;
    } else {
      return 0;
    }
  });

  function showPayment(paymentId) {
    usersData.forEach((user) => {
      user.payments.forEach((payment) => {
        if (+payment.paymentId === +paymentId) {
          setCurrentPayment({
            username: user.name,
            paymentId: paymentId,
            amount: payment.amount,
            date: payment.date,
          });
        }
      });
    });
    setShowModal(true);
  }

  const renderPayments = allPayments.map((payment) => {
    return (
      <div
        onClick={() => showPayment(payment.paymentId)}
        key={payment.paymentId}
        className={styles.Payment}
      >
        <div className={styles.Payment__date}>{payment.date}</div>
        <div className={styles.Payment__amount}>+{payment.amount} руб.</div>
      </div>
    );
  });

  return (
    <main className={styles.Container}>
      <div className={styles.Box}>{renderPayments}</div>
      <Modal
        showModal={showModal}
        closeModal={() => {
          setShowModal(false);
        }}
      >
        <div className={styles.Payment__info}>
          <div className={styles.Payment__infoItem}>
            Пользователь: {currentPayment.username}
          </div>
          <div className={styles.Payment__infoItem}>
            Дата платежа: {currentPayment.date}
          </div>
          <div className={styles.Payment__infoItem}>
            Сумма платежа: {currentPayment.amount} руб.
          </div>
          <div className={styles.Payment__infoItem}>
            Идентификатор платежа: {currentPayment.paymentId}
          </div>
        </div>
      </Modal>
    </main>
  );
}

export default Payments;
