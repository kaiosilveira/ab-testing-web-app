import TaskBlocks from '../../components/TaskBlocks';
import * as S from './styles';

const TASK_BLOCK_ITEMS = [
  {
    id: 1,
    friendlyId: 'getting_started_task_group',
    title: 'Getting started',
    description: 'Group of tasks to help you familiarize with the product',
    taskCount: 4,
  },
  {
    id: 2,
    friendlyId: 'our_suggestions_task_group',
    title: 'Our suggestions',
    description: 'Group of tasks that we think will help you move forward',
    taskCount: 2,
  },
  {
    id: 3,
    friendlyId: 'becoming_a_pro_task_group',
    title: 'Becoming a PRO',
    description: 'Master our most advanced features with these tasks',
    taskCount: 7,
  },
];

const TasksScreen = () => {
  return (
    <S.TasksScreen>
      <h1>Your tasks</h1>
      <TaskBlocks items={TASK_BLOCK_ITEMS} />
    </S.TasksScreen>
  );
};

export default TasksScreen;
