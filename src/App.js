import AboutSection from './components/AboutSection';
import NavBar from './components/NavBar';
import TheHome from './components/TheHome';
import TheTicker from './components/TheTicker';
import CrouselTape from './components/CrouselTape';
import FeaturesBenefits from './components/FeaturesBenefits';
import './App.css';

function App() {
  return (
    <div className="App">
    
      <NavBar/>
      <TheHome/>
      <CrouselTape/>
      <AboutSection/>
      <FeaturesBenefits/>
      <TheTicker/>
    </div>
  );
}

export default App;
