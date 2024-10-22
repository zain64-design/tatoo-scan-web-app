import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import Home from './pages/Home';
// import About from './pages/About';
// import Services from './pages/Services';
// import Blogs from './pages/Blogs';
// import Contact from './pages/Contact';
// import Layout from './components/Layout/Layout';
// import BlogDetails from './pages/BlogDetails';
import Layout from './components/Layout/Layout';
import RouteLoader from './components/Loader/RouteLoader';
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Blogs = lazy(() => import('./pages/Blogs'));
const BlogDetails = lazy(() => import('./pages/BlogDetails'));
const Contact = lazy(() => import('./pages/Contact'));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
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
        <Suspense fallback={<RouteLoader/>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blog-detail/:id" element={<BlogDetails />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </Layout>
      </Router>
      </QueryClientProvider>
    </>
  )
}

export default App
