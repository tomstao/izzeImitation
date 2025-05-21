// import './App.css'
// import Header from './components/Header.jsx'
// import {useEffect, useState} from 'react'
// import axios from 'axios'
// import FloatingCart from "./components/FloatingCart.jsx";
// import Footer from "./components/Footer.jsx";
// import ScrollingBanner from "./components/ScrollingBanner.jsx";
// import './css/HeroImg.css'
// import MiddleTransition from "./components/MiddleTransition.jsx";
// import ProductList from "./components/ProductList.jsx";
// import BackToTop from "./components/BackToTop.jsx";
// function App() {
//     const [greeting, setGreeting] = useState('');
//
//     useEffect(() => {
//         axios.get('http://localhost:5000/api/greeting')
//             .then(res => setGreeting(res.data.message))
//             .catch(err => console.error(err));
//     }, []);
//
//     return (
//         <div className="page-wrapper">
//             <Header/>
//
//             {/* Display greeting message from Flask */}
//             <main className="flex-fill">
//
//             <h2 className='text-center'>{greeting || 'Loading the desserts...'}</h2>
//
//                 {/*<div className='container mt-5 '>*/}
//                     {/*<div className="row row-cols-1 row-cols-md-2 g-4">*/}
//                         <ProductList />
//
//
//                     {/*</div>*/}
//                 {/*</div>*/}
//                 {/*<div className="text-center mt-4">*/}
//                 {/*</div>*/}
//             </main>
//             <ScrollingBanner/>
//             <div className='hero-img'></div>
//             <MiddleTransition/>
//             <FloatingCart/>
//             <BackToTop/>
//             <Footer/>
//         </div>
//     );
// }
//
// export default App;

import './App.css';
import Header from './components/Header.jsx';
import { useEffect, useState } from 'react';
import axios from 'axios';
import FloatingCart from './components/FloatingCart.jsx';
import Footer from './components/Footer.jsx';
import ScrollingBanner from './components/ScrollingBanner.jsx';
import './css/HeroImg.css';
import MiddleTransition from './components/MiddleTransition.jsx';
import ProductList from './components/ProductList.jsx';
import BackToTop from './components/BackToTop.jsx';

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage.jsx';
import LoginPage from "./pages/LoginPage.jsx"; // ✅ new page

function HomePage({ greeting }) {
    return (
        <>
            <h2 className='text-center'>{greeting || 'Loading the desserts...'}</h2>
            <ProductList />
            <ScrollingBanner />
            <div className='hero-img'></div>
            <MiddleTransition />
        </>
    );
}

function AppContent() {
    const location = useLocation();
    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5000/api/greeting')
            .then(res => setGreeting(res.data.message))
            .catch(err => console.error(err));
    }, []);

    const isAuthPage = location.pathname === '/register' || location.pathname === '/login';
    return (
        <div className="page-wrapper">
            {!isAuthPage && <Header />}
            <main className="flex-fill">
                <Routes>
                    <Route path="/" element={<HomePage greeting={greeting} />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                </Routes>
            </main>

            {!isAuthPage && (
                <>
                    <FloatingCart />
                    <BackToTop />
                </>
            )}
            <Footer />
        </div>
    );
}

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

export default App;