import {FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa';
import '/src/css/SocialMediaIcons.css'

function SocialMedias() {

    return (
        <>
            <div className="social-icons">
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                    <FaFacebook size={28}/>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                    <FaTwitter size={28}/>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                    <FaInstagram size={28}/>
                </a>
            </div>
        </>
    )
}

export default SocialMedias;