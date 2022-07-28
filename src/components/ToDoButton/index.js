import { useLocation } from '../../utils/location';
import { useTracking } from '../../utils/tracking';

const ToDoButton = () => {
  const { navigateTo } = useLocation();
  const { fireEvent } = useTracking();

  const handleClick = () => {
    navigateTo({ path: '/tasks' });
    fireEvent({ type: 'tasks', category: 'tasks_events', action: 'to_do_btn_clicked' });
  };

  return (
    <button aria-label="to-do" onClick={handleClick}>
      To-do
    </button>
  );
};

export default ToDoButton;
