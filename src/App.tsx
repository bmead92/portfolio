import './App.scss';
import Header from './components/Header/index';
import About from './components/About/index';
import Skills from './components/Skills';
import NavigationTabs from './components/NavigationTabs';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <NavigationTabs />
      <About />
      <Skills />
    </BrowserRouter>
  );
}

export default App;
