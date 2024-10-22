import React from 'react'
import Header from '../Header/Header'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Footer from '../Footer/Footer'

const Layout = ({children}) => {
  return (
    <>
        <QueryClientProvider client={queryClient}>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </QueryClientProvider>
    </>
  )
}

export default Layout