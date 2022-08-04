jest.mock('../../hooks/tasks');
import { screen, render, fireEvent } from '@testing-library/react';

import ToDoButton from '.';
import * as locationUtils from '../../utils/location';
import * as trackingUtils from '../../utils/tracking';
import * as tasksHooks from '../../hooks/tasks';

describe('ToDoButton', () => {
  describe('navigation', () => {
    it('should navigate to tasks when clicked', () => {
      const fakeTrackingFn = jest.fn();
      const fakeNavigationFn = jest.fn();
      jest.spyOn(locationUtils, 'useLocation').mockReturnValue({ navigateTo: fakeNavigationFn });
      jest.spyOn(trackingUtils, 'useTracking').mockReturnValue({ trackEvent: fakeTrackingFn });
      jest.spyOn(tasksHooks, 'useTasksExperiment').mockReturnValue({ shouldDisplay: true });

      render(<ToDoButton />);

      const btn = screen.getByRole('button', { name: 'to-do' });
      fireEvent.click(btn);

      expect(fakeNavigationFn).toHaveBeenCalledTimes(1);
      expect(fakeNavigationFn).toHaveBeenCalledWith({ path: '/tasks' });
    });
  });

  describe('tracking', () => {
    it('should track clicking events', () => {
      const fakeTrackingFn = jest.fn();
      const fakeNavigationFn = jest.fn();
      jest.spyOn(locationUtils, 'useLocation').mockReturnValue({ navigateTo: fakeNavigationFn });
      jest.spyOn(trackingUtils, 'useTracking').mockReturnValue({ trackEvent: fakeTrackingFn });
      jest.spyOn(tasksHooks, 'useTasksExperiment').mockReturnValue({ shouldDisplay: true });

      render(<ToDoButton />);

      const btn = screen.getByRole('button', { name: 'to-do' });
      fireEvent.click(btn);

      expect(fakeTrackingFn).toHaveBeenCalledTimes(1);
      expect(fakeTrackingFn).toHaveBeenCalledWith({
        type: 'tasks',
        category: 'tasks_events',
        action: 'to_do_btn_clicked',
      });
    });
  });

  describe('UI', () => {
    it('should not render if the user is not in the experiment', () => {
      const fakeTrackingFn = jest.fn();
      const fakeNavigationFn = jest.fn();
      jest.spyOn(locationUtils, 'useLocation').mockReturnValue({ navigateTo: fakeNavigationFn });
      jest.spyOn(trackingUtils, 'useTracking').mockReturnValue({ trackEvent: fakeTrackingFn });
      jest.spyOn(tasksHooks, 'useTasksExperiment').mockReturnValue({ shouldDisplay: false });

      render(<ToDoButton />);

      const btn = screen.queryByRole('button', { name: 'to-do' });
      expect(btn).not.toBeInTheDocument();
    });
  });
});
