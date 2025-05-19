import SocialMedias from "./SocialMedias.jsx";
import PhotoShowcase from "./PhotoShowcase.jsx";
import '/src/css/MiddleTransition.css'
function MiddleTransition() {


    return (
        <>
            <div className="text-center mt-5 pt-5 row align-items-center justify-content-center">
                <div className='row'>
                <h1 className='middle-transition middle-transition-title'>MAKE IT A SWEET MOMENT</h1>
                <p className='middle-transition'>#dessert #tao'sdessert #feelthesweet</p>
                </div>
                <div className="w-25 row">
                    <SocialMedias/>
                </div>
            </div>
            <PhotoShowcase/>
        </>
    )
}

export default MiddleTransition;