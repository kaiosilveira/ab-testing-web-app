import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomeScreen, TasksScreen } from './screens';
import DebugScreen from './screens/Debug';
import * as S from './styles';
import { DataLayerProvider } from './utils/tracking';
import { FeatureFlagsProvider } from './utils/feature-flags';

const App = () => (
  <FeatureFlagsProvider>
    <DataLayerProvider>
      <Router>
        <S.App>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/tasks" element={<TasksScreen />} />
            <Route path="/debug" element={<DebugScreen />} />
          </Routes>
        </S.App>
      </Router>
    </DataLayerProvider>
  </FeatureFlagsProvider>
);

export default App;
