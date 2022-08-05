import { useEffect, useMemo } from 'react';
import { useTracking } from '../../utils/tracking';
import ToDoButton from '../../components/ToDoButton';
import { useFeatureFlagManagement } from '../../utils/feature-flags';
import { useLocation } from 'react-router-dom';

function useQueryParams() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

const HomeScreen = () => {
  const { trackEvent } = useTracking();
  const { setFlags, overrideFlag } = useFeatureFlagManagement();
  const queryParams = useQueryParams();

  useEffect(() => {
    try {
      const [key, variant] = JSON.parse(queryParams.get('overrideExp'));
      if (typeof key === 'string' && Number.isInteger(variant)) {
        overrideFlag({ key, variant });
      }
    } catch (ex) {
      console.debug('Failed to parse query string params.');
    }
  }, [queryParams, overrideFlag]);

  useEffect(() => {
    setFlags([
      {
        key: 'tasks',
        variant: 1,
        description: 'Test group',
        experimentName: 'Tasks-Experiment-Aug-2022',
        experimentId: 'fdakjf-rerfdsf-qwerewr',
      },
    ]);
  }, [setFlags]);

  useEffect(() => {
    trackEvent({ type: 'home_page', category: 'page_view_events', action: 'viewed' });
  }, [trackEvent]);

  return (
    <>
      <h1>A/B Testing App</h1>
      <p>This is the home screen of our app</p>
      <ToDoButton />
    </>
  );
};

export default HomeScreen;
