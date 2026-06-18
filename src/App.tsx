import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { DashboardPage } from './pages/DashboardPage';
import { CreateCompetitionPage } from './pages/CreateCompetitionPage';
import { LiveScreenPage } from './pages/LiveScreenPage';
import { OfficialLiveScreenPage } from './pages/OfficialLiveScreenPage';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/create" element={<CreateCompetitionPage />} />
          <Route path="/live/:id" element={<LiveScreenPage />} />
          <Route path="/live/:id/official" element={<OfficialLiveScreenPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
