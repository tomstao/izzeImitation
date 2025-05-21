import Login from '/src/components/Login.jsx';
import FooterHomeLink from "../components/FooterHomeLink.jsx";
import '/src/css/RegisterTitle.css'

function LoginPage() {
    {
        return (
            <>
                <div className="container text-center registerTitle">
                    <div className='container pt-5 h1'>
                        <FooterHomeLink fontColor={"#9d1347"}/>
                    </div>

                    <div className="container p-5" id="register-page">
                        <Login />
                    </div>
                </div>
            </>
        );
    }
}

export default LoginPage;