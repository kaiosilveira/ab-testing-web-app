import { useEffect } from 'react';
import { useTracking } from '../../utils/tracking';
import ToDoButton from '../../components/ToDoButton';

const HomeScreen = () => {
  const { trackEvent } = useTracking();

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
