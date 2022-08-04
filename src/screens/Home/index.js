import { useEffect } from 'react';
import { useTracking } from '../../utils/tracking';
import ToDoButton from '../../components/ToDoButton';
import { useFeatureFlagManagement } from '../../utils/feature-flags';

const HomeScreen = () => {
  const { trackEvent } = useTracking();
  const { setFlags } = useFeatureFlagManagement();

  useEffect(() => {
    setFlags([
      {
        key: 'tasks',
        variations: [
          {
            variant: 0,
            description: 'Control group',
            experimentName: 'Tasks-Experiment-Aug-2022',
            experimentId: 'fdakjf-rerfdsf-qwerewr',
          },
          {
            variant: 1,
            description: 'Test group',
            experimentName: 'Tasks-Experiment-Aug-2022',
            experimentId: 'fdakjf-rerfdsf-qwerewr',
          },
        ],
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
