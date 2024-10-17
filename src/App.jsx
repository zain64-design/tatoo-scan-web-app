import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Layout from './components/Layout/Layout';
import BlogDetails from './pages/BlogDetails';

function App() {

  return (
    <>
      <Router>
        <Layout>
        <Routes>
          <Route exact path="/" index element={<Home/>} />
          <Route exact path="/about-us" element={<About/>} />
          <Route exact path="/services" element={<Services/>} />
          <Route exact path="/blogs" element={<Blogs/>} />
          <Route exact path="/blog-detail/:id" element={<BlogDetails/>} />
          <Route exact path="/contact" element={<Contact/>} />
        </Routes>
        </Layout>
      </Router>
    </>
  )
}

export default App
