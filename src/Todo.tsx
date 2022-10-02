import { TodoType } from "./type/todo";

export const Todo = (props: Omit<TodoType, "id">) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[Complete]" : "[Incomplete]";
  return <p>{`${completeMark} ${title}(user: ${userId})`}</p>;
};
