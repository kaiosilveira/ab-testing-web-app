import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomeScreen, TasksScreen } from './screens';
import * as S from './styles';

const App = () => {
  return (
    <Router>
      <S.App>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/tasks" element={<TasksScreen />} />
        </Routes>
      </S.App>
    </Router>
  );
};

export default App;
