import { useTasksExperiment } from '../../hooks/tasks';
import { useLocation } from '../../utils/location';
import { useTracking } from '../../utils/tracking';

const ToDoButton = () => {
  const { navigateTo } = useLocation();
  const { trackEvent } = useTracking();
  const tasksExpInfo = useTasksExperiment();

  const handleClick = () => {
    navigateTo({ path: '/tasks' });
    trackEvent({ type: 'tasks', category: 'tasks_events', action: 'to_do_btn_clicked' });
  };

  if (!tasksExpInfo.shouldDisplay) return null;

  return (
    <button aria-label="to-do" onClick={handleClick}>
      To-do
    </button>
  );
};

export default ToDoButton;
