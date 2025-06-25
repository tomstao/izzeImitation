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

import "./App.css";
import Header from "./components/Header.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import FloatingCart from "./components/FloatingCart.jsx";
import Footer from "./components/Footer.jsx";
import ScrollingBanner from "./components/ScrollingBanner.jsx";
import "./css/HeroImg.css";
import MiddleTransition from "./components/MiddleTransition.jsx";
import ProductList from "./components/ProductList.jsx";
import BackToTop from "./components/BackToTop.jsx";
import { useCart } from "./components/CartContext.jsx";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import RegisterPage from "./pages/RegisterPage.jsx";
import LoginPage from "./pages/LoginPage.jsx"; // ✅ new page
import ProfilePage from "./pages/ProfilePage.jsx"; // ✅ profile page

function HomePage({ greeting }) {
  return (
    <>
      <h2 className="text-center">{greeting || "Loading the desserts..."}</h2>
      <ProductList />
      <ScrollingBanner />
      <div className="hero-img"></div>
      <MiddleTransition />
    </>
  );
}

function Snackbar() {
  const { snackbar, closeSnackbar } = useCart();
  if (!snackbar.open) return null;
  return (
    <div
      style={{
        position: "fixed",
        bottom: "2rem",
        left: "50%",
        transform: "translateX(-50%)",
        background: "linear-gradient(135deg, #9d1347 0%, #ef88ad 100%)",
        color: "white",
        padding: "1rem 2rem",
        borderRadius: "30px",
        boxShadow: "0 4px 20px rgba(157, 19, 71, 0.2)",
        fontSize: "1.1rem",
        zIndex: 9999,
        minWidth: "200px",
        textAlign: "center",
        animation: "fadeInUp 0.3s",
      }}
      onClick={closeSnackbar}
    >
      {snackbar.message}
      <style>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(30px) translateX(-50%); }
                    to { opacity: 1; transform: translateY(0) translateX(-50%); }
                }
            `}</style>
    </div>
  );
}

function AppContent() {
  const location = useLocation();
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/greeting")
      .then((res) => setGreeting(res.data.message))
      .catch((err) => console.error(err));
  }, []);

  const isAuthPage =
    location.pathname === "/register" || location.pathname === "/login";
  return (
    <div className="page-wrapper">
      {!isAuthPage && <Header />}
      <main className="flex-fill">
        <Routes>
          <Route path="/" element={<HomePage greeting={greeting} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </main>

      {!isAuthPage && (
        <>
          <FloatingCart />
          <BackToTop />
        </>
      )}
      <Footer />
      <Snackbar />
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
