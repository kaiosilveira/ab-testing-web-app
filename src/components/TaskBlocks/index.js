import TaskItem from './TaskItem';
import { useTracking } from '../../utils/tracking';

export const TaskBlocks = ({ items }) => {
  const { trackEvent } = useTracking();
  const gettingStartedTaskGroup = items.find(i => i.friendlyId === 'getting_started_task_group');
  const ourSuggestionsTaskGroup = items.find(i => i.friendlyId === 'our_suggestions_task_group');

  const handleClick = action => trackEvent({ action, type: 'tasks', category: 'tasks_events' });

  return (
    <div>
      <TaskItem
        key={gettingStartedTaskGroup.id}
        title="Getting started"
        description={gettingStartedTaskGroup.description}
        taskCount={gettingStartedTaskGroup.taskCount}
        onClick={() => handleClick('getting_started_task_block_clicked')}
      />
      <TaskItem
        key={ourSuggestionsTaskGroup.id}
        title="Our suggestions"
        description={ourSuggestionsTaskGroup.description}
        taskCount={ourSuggestionsTaskGroup.taskCount}
        onClick={() => handleClick('our_suggestions_task_block_clicked')}
      />
    </div>
  );
};

export default TaskBlocks;
