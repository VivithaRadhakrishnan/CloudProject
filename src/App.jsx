import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import JobPosting from './pages/JobPosting';
import Applicants from './pages/Applicants';
import { styles } from './styles';

const App = () => {
  return (
    <Router>
      <div style={styles.app}>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/post-job" element={<JobPosting />} />
          <Route path="/applicants" element={<Applicants />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;