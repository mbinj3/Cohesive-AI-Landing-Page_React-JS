import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Features from './components/Features';
import UseCase from './components/UseCase';
import Templates from './components/Templates';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Community from './components/Community';


function App() {
  return (
    <div className='App w-full h-auto flex flex-col items-center'>
      <Navbar />
      <Home />
      <Features />
      <UseCase />
      <Templates />
      <Pricing />
      <Community />
      <Footer />
      {/* <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/portfolio' element={<Portfolio />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes> */}
    </div>
  );
}

export default App;
