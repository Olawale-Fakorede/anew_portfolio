
import { useState } from 'react';
import About from './components/About';
import Banner from './components/Banner';
import Contact from './components/Contact';
import Header from './components/Header';
import Nav from './components/Nav';
import Project from './components/Project';
import Work from './components/Work';

function App() {

  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode && "dark"}>

        <Header darkMode={darkMode} setDarkMode={setDarkMode}/>

        <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
          <Banner/>
          <Nav/>
          <About/>
          <Project/>
          <Work/>
          <Contact/>
        </main>
    </div>
  );
}

export default App;
