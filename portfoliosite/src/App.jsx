import './App.css';
import TopPage from './components/TopPage';
import Gallery from './components/Gallery.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<TopPage />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
