import { render, screen } from '@testing-library/react';
import TaskBlocks from '.';

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
];

describe('TaskList', () => {
  describe('UI', () => {
    it('should render a list of task blocks', () => {
      render(<TaskBlocks taskBlockItems={TASK_BLOCK_ITEMS} />);

      const gettingStartedBox = screen.getByLabelText('Getting started task block');
      const ourSuggestionsBox = screen.getByLabelText('Our suggestions task block');

      expect(gettingStartedBox).toBeInTheDocument();
      expect(ourSuggestionsBox).toBeInTheDocument();
    });
  });
});
