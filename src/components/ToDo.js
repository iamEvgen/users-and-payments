/* eslint-disable */
import React from 'react';
import styles from './ToDo.module.scss';
import { useUsers } from '../UsersContext';

function ToDo({ userId }) {
  const { usersData, setUsersData, activeUserId } = useUsers();

  const deleteBtn = require(`../icons/delete.png`);
  const user = usersData.find((user) => +user.userId === +userId);

  function handleChange(userId, taskId) {
    setUsersData((prevData) => {
      const newUsersData = JSON.parse(JSON.stringify(prevData));
      newUsersData.forEach((user) => {
        if (+user.userId === +userId) {
          user.tasks.forEach((task) => {
            if (+task.taskId === +taskId) {
              task.finished = !task.finished;
            }
          });
        }
      });
      console.log(newUsersData);
      return newUsersData;
    });
  }

  function deleteTask(userId, taskId) {
    setUsersData((prevData) => {
      const newUsersData = JSON.parse(JSON.stringify(prevData));
      newUsersData.forEach((user) => {
        if (+user.userId === +userId) {
          user.tasks = user.tasks.filter((task) => +task.taskId !== +taskId);
        }
      });
      console.log(newUsersData);
      return newUsersData;
    });
  }

  const todoList = user.tasks.map((task) => {
    return (
      <div key={task.taskId} className={styles.Todo}>
        <input
          className={styles.Todo__checkbox}
          type="checkbox"
          checked={task.finished}
          onChange={() => {
            handleChange(activeUserId, task.taskId);
          }}
          name="finished"
        />
        <div className={styles.Todo__text}>{task.text}</div>
        <img
          className={styles.Todo__deleteBtn}
          onClick={() => deleteTask(activeUserId, task.taskId)}
          src={deleteBtn}
          alt="delete button"
        />
      </div>
    );
  });

  return (
    <div className={styles.ToDoList}>
      <h2>{user.name} - задачи:</h2>
      {todoList}
    </div>
  );
}

export default ToDo;
