import axios from "axios";
import { useState } from "react";
import "./styles.css";
import { Todo } from "./Todo";
import { TodoType } from "./type/todo";
import { Text } from "./Text";
import { UserProfile } from "./UserProfile";
import { User } from "./type/user";

const user: User = {
  name: "Tom",
  hobbies: ["movie", "game"]
};

export default function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const onClickFetchData = () => {
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
      });
  };
  return (
    <div className="App">
      <UserProfile user={user} />
      <Text color="red" fontSize="24px" />
      <button onClick={onClickFetchData}>Get data</button>
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            title={todo.title}
            userId={todo.userId}
            completed={todo.completed}
          />
        );
      })}
    </div>
  );
}
