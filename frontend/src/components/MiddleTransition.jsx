import SocialMedias from "./SocialMedias.jsx";
import PhotoShowcase from "./PhotoShowcase.jsx";
import '/src/css/MiddleTransition.css'
function MiddleTransition() {


    return (
        <>
            <div className="container text-center my-5 py-5">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8">
                        <h1 className="middle-transition middle-transition-title">
                            MAKE IT A SWEET MOMENT
                        </h1>
                        <p className="middle-transition">
                            #dessert #tao'sdessert #feelthesweet
                        </p>
                        <div className="social-media-wrapper mt-4">
                            <SocialMedias />
                        </div>
                    </div>
                </div>
            </div>
            <PhotoShowcase/>
        </>
    )
}

export default MiddleTransition;