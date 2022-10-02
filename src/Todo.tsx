export const Todo = (props) => {
  const { title, userid, completed } = props;
  const completeMark = completed ? "[Complete]" : "[Incomplete]";
  return <p>{`${completeMark} ${title}(user: ${userid})`}</p>;
};
