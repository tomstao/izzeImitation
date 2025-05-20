import { useState, useEffect } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import '/src/css/BackToTop.css';

function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisible = () => {
            setVisible(window.scrollY > 300); // show after scroll 300px
        };

        window.addEventListener('scroll', toggleVisible);
        return () => window.removeEventListener('scroll', toggleVisible);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        visible && (
            <div className="back-to-top" onClick={scrollToTop}>
                <FaArrowCircleUp size={40} />
            </div>
        )
    );
}

export default BackToTop;