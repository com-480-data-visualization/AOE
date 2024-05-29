import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import MoonRace from './MoonRace';
import ApolloEvolution from './ApolloEvolution';
import RocketMissions from './RocketMissions';
import LivingInSpace from './LivingInSpace';
import LessonsFromFailures from './LessonsFromFailures';
import Header from './Header';

function App() {
  return (
    <Router>
      <div className="App">
      <Header />
        <nav>
          <ul className="nav-bar">
            <li><Link to="/">Moon Race</Link></li>
            <li><Link to="/apollo-evolution">Apollo Evolution</Link></li>
            <li><Link to="/rocket-missions">Rocket Missions</Link></li>
            <li><Link to="/living-in-space">Living in Space</Link></li>
            <li><Link to="/lessons-from-failures">Lessons Learned</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route exact path="/" element={<MoonRace />} />
          <Route path="/apollo-evolution" element={<ApolloEvolution />} />
          <Route path="/rocket-missions" element={<RocketMissions />} />
          <Route path="/living-in-space" element={<LivingInSpace />} />
          <Route path="/lessons-from-failures" element={<LessonsFromFailures />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
