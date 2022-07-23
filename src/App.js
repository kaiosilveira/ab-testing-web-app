import TaskBlocks from './components/TaskBlocks';
import * as S from './styles';

const TASK_BLOCK_ITEMS = [
  {
    id: 1,
    title: 'Getting started',
    description: 'Group of tasks to help you familiarize with the product',
    taskCount: 4,
  },
  {
    id: 2,
    title: 'Our suggestions',
    description: 'Group of tasks that we think will help you move forward',
    taskCount: 2,
  },
  {
    id: 3,
    title: 'Becoming a PRO',
    description: 'Master our most advanced features with these tasks',
    taskCount: 7,
  },
];

const App = () => {
  return (
    <S.App>
      <h1>AB TESTING APP</h1>
      <TaskBlocks taskBlockItems={TASK_BLOCK_ITEMS} />
    </S.App>
  );
};

export default App;
