import React from 'react';
import styles from './ToDo.module.scss';
import { useUsers } from '../UsersContext';
import uniqid from 'uniqid';
import PropTypes from 'prop-types';

function ToDo({ userId }) {
  const { usersData, setUsersData, activeUserId } = useUsers();
  const [showNewTaskForm, setShowNewTaskForm] = React.useState(false);
  const [newTaskText, setNewTaskText] = React.useState('');

  ToDo.propTypes = {
    userId: PropTypes.number,
  };

  const deleteBtn = require(`../icons/delete.png`);
  const user = usersData.find((user) => +user.userId === +userId);

  function handleNewTaskText(event) {
    setNewTaskText(event.target.value);
  }

  function saveNewtask() {
    setUsersData((prevData) => {
      const newUsersData = JSON.parse(JSON.stringify(prevData));
      newUsersData.forEach((user) => {
        if (+user.userId === +activeUserId) {
          user.tasks.push({
            taskId: uniqid(),
            finished: false,
            text: newTaskText,
          });
        }
      });
      return newUsersData;
    });
    setNewTaskText('');
    setShowNewTaskForm(false);
  }

  function handleChange(userId, taskId) {
    setUsersData((prevData) => {
      const newUsersData = JSON.parse(JSON.stringify(prevData));
      newUsersData.forEach((user) => {
        if (+user.userId === +userId) {
          user.tasks.forEach((task) => {
            if (task.taskId === taskId) {
              task.finished = !task.finished;
            }
          });
        }
      });
      return newUsersData;
    });
  }

  function deleteTask(userId, taskId) {
    setUsersData((prevData) => {
      const newUsersData = JSON.parse(JSON.stringify(prevData));
      newUsersData.forEach((user) => {
        if (+user.userId === +userId) {
          user.tasks = user.tasks.filter((task) => task.taskId !== taskId);
        }
      });
      return newUsersData;
    });
  }

  const todoList = user.tasks.map((task) => {
    const style = task.finished ? { textDecoration: 'line-through' } : {};

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
        <div style={style} className={styles.Todo__text}>
          {task.text}
        </div>
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
      {!showNewTaskForm && (
        <button
          onClick={() => setShowNewTaskForm(true)}
          className={styles.ToDoList__addBtn}
        >
          + Новая задача
        </button>
      )}
      {showNewTaskForm && (
        <form
          onSubmit={(event) => {
            event.preventDefault();
            saveNewtask();
          }}
          className={styles.NewTask}
        >
          <input
            placeholder="Текст задачи"
            className={styles.NewTask__inputField}
            type="text"
            required
            minLength="3"
            value={newTaskText}
            onChange={handleNewTaskText}
          />
          <div className={styles.NewTask__buttons}>
            <button className={styles.NewTask__buttonApply}>Сохранить</button>
            <button
              onClick={(event) => {
                event.preventDefault();
                setNewTaskText('');
                setShowNewTaskForm(false);
              }}
              className={styles.NewTask__buttonCancel}
            >
              Отмена
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default ToDo;
