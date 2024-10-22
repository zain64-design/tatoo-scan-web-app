import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Layout from './components/Layout/Layout';
import BlogDetails from './pages/BlogDetails';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: false,
      staleTime: 5000,       
      cacheTime: 120000,      // Cache time is now 2 minutes (120,000 ms) 
      retry: 2,              // Retry the request up to 2 times
      refetchOnWindowFocus: false, // No refetch on window focus
    },
  },
});

function App() {

  return (
    <>
    <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    </>
  )
}

export default App
