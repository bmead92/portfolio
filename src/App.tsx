import './App.scss';
import Header from './components/Header/index';
import Greeting from './components/Greeting/index';
import Skills from './components/Skills';
import NavigationTabs from './components/NavigationTabs';
import Resume from './components/Resume';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <NavigationTabs />
      <Greeting />
      <Skills />
      <Resume />
    </BrowserRouter>
  );
}

export default App;
