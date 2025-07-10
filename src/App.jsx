import styles from './styles/App.module.css';
import Container from 'react-bootstrap/Container';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { Routes, Route} from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx';
import Projects from './pages/projects/Projects.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Gallery from './pages/Gallery.jsx';
import Contact from './pages/Contact.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';

function App() {
  return (
    <div>
      <NavBar />
        <Container className={styles.App}>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/aboutus' element={<AboutUs />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          </Routes>
        </Container>
      <Footer />
    </div>
  );
}

export default App;
