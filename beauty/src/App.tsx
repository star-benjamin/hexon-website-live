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
import { NavLink } from 'react-router-dom';
import logo from "./assets/logo.jpg"
import './App.css'
import Footer from './components/footer';

function App() {
  const[open,setOpen]=useState(false);

  return (
    
      <BrowserRouter>
        <div className='min-h-screen bg-white text-black dark:bg-gray-800 dark:text-white overflow-x-hidden'>
          {/*nav bar*/}
          
        <header className='flex items-center justify-between px-6 py-2 relative '>
            {/*Logo*/}
            <img src={logo} alt="hexon technical services ltd logo" className='ml-4 md:mr-12 lg:mr-30  object-contain w-28 h-28'/>

              {/*Hamburger button only on mobile*/}
              <button className='md:hidden p-2 rounded bg-amber-200 dark:bg-gray-700 relative z-50'
              onClick={()=>setOpen(!open)}>
                {open ? '✕' : '☰'}
              </button>

                {/*Links*/}
                <nav className={`absolute right-6 top-full mt-0 w-48 bg-amber-200 rounded-xl text-black shadow-xl z-40 transition-all duration-300 ${
                    open? 'opacity-100 visible':'opacity-0 invisible md:opacity-100 md:visible'} md:static md:flex md:flex-row md:gap-6 md:w-auto md:bg-transparent md:shadow-none`}>
                    
                    <div className='flex flex-col gap-1  md:gap-2 md:flex md:flex-row '>
                      
                      <NavLink to="/" onClick={() => setOpen(false)} className={({ isActive }) =>`px-3 py-2 rounded transition-colors ${
                            isActive
                              ? "underline"
                              : " hover:text-yellow-500"
                          }`
                        }
                      >
                        Home
                      </NavLink>

                      <NavLink to="/services" onClick={() => setOpen(false)} className={({ isActive }) =>
                          `px-3 py-2 rounded transition-colors ${
                            isActive
                              ? "underline"
                              : " hover:text-yellow-500 "
                          }`
                        }
                      >
                        Services
                      </NavLink>
                    <NavLink to="/projects" onClick={() => setOpen(false)}  className={({ isActive }) =>
                          `px-3 py-2 rounded transition-colors ${
                            isActive
                              ? "underline"
                              : " hover:text-yellow-500 "
                          }`
                        }
                      >
                        Project Gallery
                      </NavLink>
                      <NavLink to="/about" onClick={() => setOpen(false)} className={({ isActive }) =>
                          `px-3 py-2 rounded transition-colors ${
                            isActive
                              ? "underline"
                              : "hover:text-yellow-500"
                          }`
                        }
                      >
                        About Us
                      </NavLink>
                      <NavLink to="/teams" onClick={() => setOpen(false)} className={({ isActive }) =>
                          `px-3 py-2 rounded transition-colors ${
                            isActive
                              ? "underline"
                              : " hover:text-yellow-500"
                          }`
                        }
                      >
                        Team
                      </NavLink>
                      <NavLink to="/contactUs" onClick={() => setOpen(false)} className={({ isActive }) =>
                          `px-3 py-2 rounded transition-colors ${
                            isActive
                              ? "underline"
                              : " hover:text-yellow-500"
                          }`
                        }
                      >
                        Contact Us
                      </NavLink>
                      

                    </div>
                    {/* <div className='ml-auto'>
                      <ThemeToggle />
                    </div> */}
             </nav>

             
          
          </header> 
         

          {/*Page content*/}
        <main className='p-6'>
            <Routes>
              <Route path="*" element={<NotFound/>}/>
              <Route path="/" element={<Home/>}/>
              <Route path="/services" element={<Services/>}/>
              <Route path="/projects" element={<Projects/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path='/teams' element={<Teams/>}/>
              <Route path='/contactUs' element={<ContactUs/>}/>
            </Routes>
         </main>
        </div>
        <Footer/>
      </BrowserRouter>
   
  )
}

export default App
