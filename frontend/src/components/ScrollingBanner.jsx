import '/src/css/ScrollingBanner.css'
import {FaBirthdayCake, FaPercent, FaTruck} from 'react-icons/fa';

function ScrollingBanner() {
    return (
        <>
            <div className="scroll-banner">
                <div className="scroll-track">
                    <span><FaBirthdayCake/>&nbsp; Try our new summer desserts! &nbsp;&nbsp;&nbsp;</span>
                    <span>&nbsp; 20% off all cakes this weekend! &nbsp;&nbsp;&nbsp;</span>
                    <span><FaTruck/>&nbsp; Free delivery over $25! &nbsp;&nbsp;&nbsp;</span>

                    {/* repeat to enable smooth loop */}
                    <span><FaBirthdayCake/>&nbsp; Try our new summer desserts! &nbsp;&nbsp;&nbsp;</span>
                    <span>&nbsp; 20% off all cakes this weekend! &nbsp;&nbsp;&nbsp;</span>
                    <span><FaTruck/>&nbsp; Free delivery over $25! &nbsp;&nbsp;&nbsp;</span>
                </div>
            </div>
        </>
    )
}

export default ScrollingBanner;