import { useDataLayer } from '../../utils/tracking';

const DebugScreen = () => {
  const store = useDataLayer();
  return (
    <div>
      <h3>Events fired</h3>
      <table>
        <thead>
          <tr>
            <td>Type</td>
            <td>Category</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {store.events.map((event, index) => (
            <tr key={index}>
              <td>{event.type}</td>
              <td>{event.category}</td>
              <td>{event.action}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DebugScreen;
