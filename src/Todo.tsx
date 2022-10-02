import { TodoType } from "./type/todo";
import { VFC } from "react";

export const Todo: VFC<Omit<TodoType, "id">> = (props) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[Complete]" : "[Incomplete]";
  return <p>{`${completeMark} ${title}(user: ${userId})`}</p>;
};
