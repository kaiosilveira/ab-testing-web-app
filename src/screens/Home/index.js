import { useContext, useEffect } from 'react';
import { DataLayerDispatchContext } from '../../utils/tracking';
import ToDoButton from '../../components/ToDoButton';

const HomeScreen = () => {
  const { fireEvent } = useContext(DataLayerDispatchContext);

  useEffect(() => {
    fireEvent({ type: 'home_page', category: 'page_view_events', action: 'viewed' });
  }, [fireEvent]);

  return (
    <>
      <h1>A/B Testing App</h1>
      <p>This is the home screen of our app</p>
      <ToDoButton />
    </>
  );
};

export default HomeScreen;
