/* eslint-disable import/first */
jest.mock('react-router-dom');

import { renderHook } from '@testing-library/react-hooks';
import { useLocation } from '.';
import * as router from 'react-router-dom';

describe('locationUtils', () => {
  describe('useLocation', () => {
    it('should navigate to the given path', () => {
      const path = '/path';
      const fakeNavigateFn = jest.fn();
      jest.spyOn(router, 'useNavigate').mockReturnValue(fakeNavigateFn);

      const { result } = renderHook(useLocation);
      const { navigateTo } = result.current;

      navigateTo({ path });

      expect(fakeNavigateFn).toHaveBeenCalledWith(path);
    });
  });
});
