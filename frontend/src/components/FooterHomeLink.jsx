import { useNavigate } from 'react-router-dom';
import '/src/css/Footer.css'
function FooterHomeLink({fontColor=''}) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="row footer-center mt-3">
            <p>
            <span onClick={handleClick} className="footer-hover-text" style={{ cursor: 'pointer', color: fontColor }}>
                Home
            </span>
            </p>
        </div>
    );
}

export default FooterHomeLink;