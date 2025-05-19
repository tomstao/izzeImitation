import '/src/css/ScrollingBanner.css'
import {FaBirthdayCake, FaTiktok, FaTruck} from 'react-icons/fa';

function ScrollingBanner() {
    return (
        <>
            <div className="scroll-banner">
                <div className="scroll-track">
                    <span><FaBirthdayCake />&nbsp; Try our new summer desserts! &nbsp;&nbsp;&nbsp;</span>
                    <span><FaTiktok />&nbsp; Follow us on TikTok for exclusive deals! &nbsp;&nbsp;&nbsp;</span>
                    <span><FaTruck />&nbsp; Free delivery over $25! &nbsp;&nbsp;&nbsp;</span>

                    {/* repeat to enable smooth loop */}
                    <span><FaBirthdayCake />&nbsp; Try our new summer desserts! &nbsp;&nbsp;&nbsp;</span>
                    <span><FaTiktok />&nbsp; Follow us on TikTok for exclusive deals! &nbsp;&nbsp;&nbsp;</span>
                    <span><FaTruck />&nbsp; Free delivery over $25! &nbsp;&nbsp;&nbsp;</span>
                </div>
            </div>
        </>
    )
}

export default ScrollingBanner;