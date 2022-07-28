import { screen, render, fireEvent } from '@testing-library/react';
import * as locationUtils from '../../utils/location';
import ToDoButton from '.';

describe('ToDoButton', () => {
  describe('navigation', () => {
    it('should navigate to tasks when clicked', () => {
      const fakeNavigationFn = jest.fn();
      jest.spyOn(locationUtils, 'useLocation').mockReturnValue({ navigateTo: fakeNavigationFn });

      render(<ToDoButton />);

      const btn = screen.getByRole('button', { name: 'to-do' });
      fireEvent.click(btn);

      expect(fakeNavigationFn).toHaveBeenCalledTimes(1);
      expect(fakeNavigationFn).toHaveBeenCalledWith({ path: '/tasks' });
    });
  });
});
