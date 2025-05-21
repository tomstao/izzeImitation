import Login from '/src/components/Login.jsx';
import FooterHomeLink from "../components/FooterHomeLink.jsx";
import '/src/css/RegisterTitle.css'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem('user');
        console.log("Checking user:", user);
        if (user) {
            console.log("Redirecting...");
            navigate('/');
        }
    }, [navigate]);

    return (
        <>
            <div className="container text-center registerTitle">
                <div className='container pt-5 h1'>
                    <FooterHomeLink fontColor={"#9d1347"} />
                </div>

                <div className="container p-5" id="register-page">
                    <Login />
                </div>
            </div>
        </>
    );
}

export default LoginPage;