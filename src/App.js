import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Experience from './pages/Experience';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectDetails from './pages/ProjectDetails';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/project/:id" element={<ProjectDetails />}/>
          <Route path="/experience" element={<Experience />}/>
          <Route path="/*" element={<NotFound />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
