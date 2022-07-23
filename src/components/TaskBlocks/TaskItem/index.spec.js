import { render, screen } from '@testing-library/react';
import TaskItem from '.';

describe('TaskItem', () => {
  const title = 'Getting started';
  const taskCount = 4;
  const description = 'Group of tasks to help you familiarize with the product';

  const SUT = () => <TaskItem title={title} taskCount={taskCount} description={description} />;

  describe('UI', () => {
    it('should render a task item with title, description and amount of tasks available', () => {
      render(<SUT />);

      const titleBox = screen.getByText(title);
      const taskCountBox = screen.getByText('4 tasks');
      const descriptionBox = screen.getByText(
        'Group of tasks to help you familiarize with the product'
      );

      expect(titleBox).toBeInTheDocument();
      expect(descriptionBox).toBeInTheDocument();
      expect(taskCountBox).toBeInTheDocument();
    });
  });

  describe('accessibility', () => {
    it('should contain an aria-label', () => {
      render(<SUT />);
      const box = screen.getByLabelText('Getting started task block');
      expect(box).toBeInTheDocument();
    });
  });
});
