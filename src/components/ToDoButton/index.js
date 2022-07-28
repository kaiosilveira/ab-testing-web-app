import { useLocation } from '../../utils/location';

const ToDoButton = () => {
  const { navigateTo } = useLocation();
  return (
    <button aria-label="to-do" onClick={() => navigateTo({ path: '/tasks' })}>
      To-do
    </button>
  );
};

export default ToDoButton;
