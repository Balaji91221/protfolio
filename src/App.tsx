import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Project from './pages/Project'
import Contact from './pages/Contact'
import About from './pages/About'


export default function App() {
  return <BrowserRouter basename='/'>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project" element={<Project/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
    
    </Routes>
  </BrowserRouter>
}