import TaskItem from './TaskItem';

export const TaskBlocks = ({ taskBlockItems }) => (
  <div>
    {taskBlockItems.map(taskBlock => (
      <TaskItem
        key={taskBlock.id}
        title={taskBlock.title}
        description={taskBlock.description}
        taskCount={taskBlock.taskCount}
      />
    ))}
  </div>
);

export default TaskBlocks;
