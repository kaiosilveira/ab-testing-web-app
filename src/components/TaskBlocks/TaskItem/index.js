import * as S from './styles';

const TaskItem = ({ title, description, taskCount }) => (
  <S.TaskItem aria-label={`${title} task block`}>
    <h3>{title}</h3>
    <p>{description}</p>
    <span>{taskCount} tasks</span>
  </S.TaskItem>
);

export default TaskItem;
