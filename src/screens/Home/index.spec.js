jest.mock('react-router-dom');
jest.mock('../../hooks/tasks');
jest.mock('../../utils/feature-flags');

import { render, screen } from '@testing-library/react';
import HomeScreen from '.';
import * as reactRouterDom from 'react-router-dom';
import * as tasksHooks from '../../hooks/tasks';
import * as featureFlagsUtils from '../../utils/feature-flags';

const fakeOverrideFlagFn = jest.fn();
const fakeSetFlagsFn = jest.fn();

describe('HomeScreen', () => {
  describe('feature flag management', () => {
    beforeEach(() => {
      jest.spyOn(tasksHooks, 'useTasksExperiment').mockReturnValue({ shouldDisplay: true });
      jest
        .spyOn(featureFlagsUtils, 'useFeatureFlagManagement')
        .mockReturnValue({ overrideFlag: fakeOverrideFlagFn, setFlags: fakeSetFlagsFn });
    });

    afterEach(() => {
      fakeOverrideFlagFn.mockReset();
      fakeSetFlagsFn.mockReset();
    });

    it('should allow for feature flag overriding', () => {
      jest
        .spyOn(reactRouterDom, 'useLocation')
        .mockReturnValue({ search: 'overrideExp=["tasks", 1]' });

      render(<HomeScreen />);

      expect(fakeOverrideFlagFn).toHaveBeenCalledWith({ key: 'tasks', variant: 1 });
    });

    it('should not crash with malformed query string data', () => {
      jest.spyOn(tasksHooks, 'useTasksExperiment').mockReturnValue({ shouldDisplay: true });
      jest
        .spyOn(reactRouterDom, 'useLocation')
        .mockReturnValue({ search: 'overrideExp=undefined' });

      render(<HomeScreen />);

      const heading = screen.getByText('A/B Testing App');
      expect(heading).toBeInTheDocument();
    });
  });
});
