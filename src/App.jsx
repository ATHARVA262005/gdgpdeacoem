import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Events from './pages/Events';
import Team from './pages/Team';
import Sponsors from './pages/Sponsors';  // Import Sponsors page
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-josefin">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/events" element={<Events />} />
            <Route path="/team" element={<Team />} />
            <Route path="/sponsors" element={<Sponsors />} /> {/* New Route */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
