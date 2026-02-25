import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './pages/home';
import Services from './pages/services';
import Projects from './pages/projects';
import About from './pages/about';
import ContactUs from './pages/contactUs';
import Teams from './pages/teams';
import NotFound from './pages/notFound';
import logo from "./assets/logo.jpg";
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import { HelmetProvider } from 'react-helmet-async'; 
import ScrollToTop from './components/scrollToTop'; 

function App() {
  // Explicitly typing state as boolean for TypeScript safety
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop /> 
        
        <div className='min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500'>
          
          <Header 
            logo={logo} 
            darkMode={darkMode} 
            toggleTheme={toggleTheme}
          />

          
          <main className='flex-grow pt-22'>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/services" element={<Services/>}/>
              <Route path="/projects" element={<Projects/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path='/teams' element={<Teams/>}/>
              <Route path='/contactUs' element={<ContactUs/>}/>
              <Route path="*" element={<NotFound/>}/>
            </Routes>
          </main>

          <Footer/>
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;