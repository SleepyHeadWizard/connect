import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Research from './pages/Research';
import Quiz from './pages/Quiz';
import Chat from './pages/Chat';
import Resources from './pages/Resources';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
