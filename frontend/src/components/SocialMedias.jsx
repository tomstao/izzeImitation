import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPinterest, FaTiktok } from 'react-icons/fa';import '/src/css/SocialMediaIcons.css'

function SocialMedias() {

    return (
        <>
            <div className="social-icons row">
                <div className="col-6 col-md-6 col-lg-4 text-center mb-3">
                    <a href="https://facebook.com" target="_blank" rel="noreferrer">
                        <FaFacebook size={28} />
                    </a>
                </div>
                <div className="col-6 col-md-6 col-lg-4 text-center mb-3">
                    <a href="https://twitter.com" target="_blank" rel="noreferrer">
                        <FaTwitter size={28} />
                    </a>
                </div>
                <div className="col-6 col-md-6 col-lg-4 text-center mb-3">
                    <a href="https://instagram.com" target="_blank" rel="noreferrer">
                        <FaInstagram size={28} />
                    </a>
                </div>
                <div className="col-6 col-md-6 col-lg-4 text-center mb-3">
                    <a href="https://youtube.com" target="_blank" rel="noreferrer">
                        <FaYoutube size={28} />
                    </a>
                </div>
                <div className="col-6 col-md-6 col-lg-4 text-center mb-3">
                    <a href="https://pinterest.com" target="_blank" rel="noreferrer">
                        <FaPinterest size={28} />
                    </a>
                </div>
                <div className="col-6 col-md-6 col-lg-4 text-center mb-3">
                    <a href="https://tiktok.com" target="_blank" rel="noreferrer">
                        <FaTiktok size={28} />
                    </a>
                </div>
            </div>
        </>
    )
}

export default SocialMedias;