jest.mock('../../utils/tracking');

import * as trackingUtils from '../../utils/tracking';
import { fireEvent, render, screen } from '@testing-library/react';
import TaskBlocks from '.';

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
];

describe('TaskList', () => {
  const fakeTrackingFn = jest.fn();

  beforeEach(() => {
    jest.spyOn(trackingUtils, 'useTracking').mockReturnValue({ fireEvent: fakeTrackingFn });
  });

  afterEach(() => {
    fakeTrackingFn.mockReset();
  });

  describe('UI', () => {
    it('should have a "Getting started" section', () => {
      render(<TaskBlocks items={TASK_BLOCK_ITEMS} />);
      const gettingStartedBox = screen.getByLabelText('Getting started task block');
      expect(gettingStartedBox).toBeInTheDocument();
    });

    it('should have a "Our suggestions" section', () => {
      render(<TaskBlocks items={TASK_BLOCK_ITEMS} />);
      const gettingStartedBox = screen.getByLabelText('Our suggestions task block');
      expect(gettingStartedBox).toBeInTheDocument();
    });
  });

  describe('Tracking', () => {
    it('should track clicks on the task items', () => {
      render(<TaskBlocks items={TASK_BLOCK_ITEMS} />);

      const gettingStartedBox = screen.getByLabelText('Getting started task block');
      const ourSuggestionsBox = screen.getByLabelText('Our suggestions task block');

      fireEvent.click(gettingStartedBox);
      fireEvent.click(ourSuggestionsBox);

      expect(fakeTrackingFn).toHaveBeenCalledTimes(2);
      expect(fakeTrackingFn).toHaveBeenCalledWith({
        type: 'tasks',
        category: 'tasks_events',
        action: 'getting_started_task_block_clicked',
      });
      expect(fakeTrackingFn).toHaveBeenCalledWith({
        type: 'tasks',
        category: 'tasks_events',
        action: 'our_suggestions_task_block_clicked',
      });
    });
  });
});
