/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import { Todo } from "./Todo";

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  const onClickDelete = (todo) => () => {
    deleteTodo(todo);
  };

  const onClickComplete = (todo) => () => {
    completeTodo(todo);
  };

  return (
    <>
      {todos
        .map((todo, index) => {
          return (
            <Todo
              todo={todo}
              onClickDelete={onClickDelete}
              onClickComplete={onClickComplete}
              key={todo._id || index}
            />
          );
        })
        .reduce((acc, cur, index) => [...acc, <hr key={index}/>, cur], [])}
    </>
  );
};

export default TodoList;
