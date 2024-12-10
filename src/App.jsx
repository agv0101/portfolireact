import { useState,useEffect } from 'react'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import "./components/styles.css"

import Header from './components/header';
import Footer from './components/footer';

import HomePage from './pages/homePage';
import LandingPage from './pages/landingPage';
import ContactPage from './pages/contactPage';
import NewsletterPage from './pages/newsletterPage';

export default function App(){
    const location = useLocation();
    const [page,setPage]=useState(location.pathname);

    useEffect(() => {
        if (location.pathname !== page) {
            setPage(location.pathname || "/home");
        }
    }, [location.pathname, page]);

   return(
    <>
        <div className='App'>
            <Header page={page} setPage={setPage}/>
            <Routes>
                <Route path="/home" element={<HomePage page={page} setPage={setPage}/>}/>
                <Route path="/landing" element={<LandingPage /> }/>
                <Route path="/contact" element={<ContactPage />}/>
                <Route path="/newsletter" element={<NewsletterPage />}/>
                <Route path="*" element={<Navigate replace to="/home"/>}/>
            </Routes>
            <Footer page={page}/>
        </div>
    </>
   ) 
}