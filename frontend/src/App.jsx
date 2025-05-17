
import './App.css'
import Header from './components/Header.jsx'
import Card from './components/Card.jsx'
import { useEffect, useState } from 'react'
import axios from 'axios'
import FloatingCart from "./components/FloatingCart.jsx";
import Footer from "./components/Footer.jsx";

function App() {
    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5000/api/greeting')
            .then(res => setGreeting(res.data.message))
            .catch(err => console.error(err));
    }, []);

    return (
        <>
            <Header />

            {/* Display greeting message from Flask */}
            <div className="text-center mt-4">
                <h2>{greeting || 'Loading the desserts...'}</h2>
            </div>

            <div className='container mt-5'>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className='col-md-6 d-flex justify-content-center'><Card /></div>
                    <div className='col-md-6 d-flex justify-content-center'><Card /></div>
                    <div className='col-md-6 d-flex justify-content-center'><Card /></div>
                    <div className='col-md-6 d-flex justify-content-center'><Card /></div>
                </div>
            </div>
            <FloatingCart/>
            <Footer />
        </>
    );
}

export default App;
