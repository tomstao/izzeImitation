import SocialMedias from "/src/components/SocialMedias.jsx";
import '/src/css/Footer.css'


function Footer() {

    return (
        <footer className="footer align-items-center text-center main-footer">
            <div className="row">
                <div className="col-md-3 mt-5 mx-1 px-5">
                    <div className="text-start">

                    <p><span className='h2'>JOINT THE PARTY</span></p>
                    <p><span>Want to make every moment sweet? Try our desserts now!</span></p>
                    <SocialMedias/>
                    </div>
                </div>
                <div className="col-md-4 footer-center-container py-5">
                    <div className="row footer-center mt-3">
                        <p><span className='footer-hover-text'>FLAVORS</span></p>
                    </div>
                    <div className="row footer-center mt-3">
                        <p><span className='footer-hover-text'> OUR STORY</span></p>

                    </div>
                    <div className="row footer-center mt-3">
                        <p><span className='footer-hover-text'>CONTACT</span></p>
                    </div>

                </div>
                <div className="col-md-4 mt-5">
                    <p><span className='footer-hover-text footer-right'>ABOUT US</span></p>
                    <p><span className='footer-hover-text footer-right'>HIRING</span></p>
                    <p><span className='footer-hover-text footer-right'>PRIVACY POLICY</span></p>
                    <p><span className='footer-hover-text footer-right'>TERMS OF USE</span></p>
                    <p><span className='footer-hover-text footer-right'>COOKIE PREFERENCE</span></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;