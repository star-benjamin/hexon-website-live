import {BrowserRouter, Routes,Route,} from 'react-router-dom';
import { useState } from 'react';
//Import the pages
import Home from './pages/home';
import Services from './pages/services';
import Projects from './pages/projects';
import About from './pages/about';
import ContactUs from './pages/contactUs';
import Teams from './pages/teams';
import NotFound from './pages/notFound';
import logo from "./assets/logo.jpg"
import './App.css'
import Footer from './components/footer';
import Header from './components/header';
import {HelmetProvider} from 'react-helmet-async'; 

function App() {

  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className='min-h-screen bg-white text-black dark:bg-gray-800 dark:text-white overflow-x-hidden'>
          {/*header*/}
          
          <Header logo={logo}/>

          {/*Page content*/}
        <main className='p-6 mt-20'>
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
        </div>
        <Footer/>
      </BrowserRouter>
      </HelmetProvider>
   
  )
}

export default App
