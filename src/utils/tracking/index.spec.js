import { renderHook } from '@testing-library/react-hooks';
import { useTracking } from '.';

describe('useTracking', () => {
  describe('trackEvent', () => {
    it('should append an event to the dataLayer when called', () => {
      const type = 'tasks';
      const category = 'tasks_navigation';
      const action = 'tasks_screen_opened';
      const eventInfo = { type, category, action };

      const { result } = renderHook(useTracking);
      const { trackEvent, eventHistory } = result.current;
      trackEvent(eventInfo);

      expect(eventHistory).toContain(eventInfo);
    });
  });
});
