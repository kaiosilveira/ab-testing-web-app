import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TasksScreen from './screens/Tasks';
import Home from './screens/Home';
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
