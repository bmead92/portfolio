import './App.scss';
import Greeting from './components/Greeting/index';
import Skills from './components/Skills';
import NavigationTabs from './components/NavigationTabs';
import Resume from './components/Resume';
import AboutMe from './components/AboutMe';
import {BrowserRouter} from 'react-router-dom';
import ScrollToHashElement from './ScrollToHashElement';
import Footer from './components/Footer';
import Projects from './components/Projects';

function App() {
  return (
    <BrowserRouter>
      <ScrollToHashElement />
      <NavigationTabs />
      <Greeting />
      <AboutMe />
      <Resume />
      <Skills />
      <Projects />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
