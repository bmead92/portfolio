import './App.scss';
import Header from './components/Header/index';
import Greeting from './components/Greeting/index';
import Skills from './components/Skills';
import NavigationTabs from './components/NavigationTabs';
import Resume from './components/Resume';
import AboutMe from './components/AboutMe';
import {BrowserRouter} from 'react-router-dom';
import ScrollToHashElement from './ScrollToHashElement';

function App() {
  return (
    <BrowserRouter>
      <ScrollToHashElement />
      <Header />
      <NavigationTabs />
      <Greeting />
      <AboutMe />
      <Skills />
      <Resume />
    </BrowserRouter>
  );
}

export default App;
