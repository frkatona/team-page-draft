import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import GroupDetails from './components/GroupDetails';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <Timeline />
            </main>
          } />
          {/* Group details pages will be dynamically routed */}
          <Route path="/group/:groupId" element={<GroupDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
