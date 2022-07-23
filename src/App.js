import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, TasksScreen } from './screens';
import * as S from './styles';

const App = () => {
  return (
    <Router>
      <S.App>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<TasksScreen />} />
        </Routes>
      </S.App>
    </Router>
  );
};

export default App;
