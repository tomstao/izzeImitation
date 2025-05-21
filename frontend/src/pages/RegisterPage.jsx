import Register from "/src/components/Register";
import FooterHomeLink from "../components/FooterHomeLink.jsx";
import "/src/css/RegisterTitle.css"
function RegisterPage() {
    return (
        <>
            <div className="container text-center registerTitle">
                <div className='container pt-5 h1'>
            <FooterHomeLink fontColor={"#9d1347"}/>
                </div>

        <div className="container p-5" id="register-page">
            <Register />
        </div>
            </div>
        </>
    );
}

export default RegisterPage;