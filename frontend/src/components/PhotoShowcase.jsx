import '/src/css/PhotoShowcase.css';
import img1 from '/src/assets/showcase/dessert_1.jpg';
import img2 from '/src/assets/showcase/dessert_2.jpg';
import img3 from '/src/assets/showcase/dessert_3.jpg';
import img4 from '/src/assets/showcase/dessert_4.jpg';
import img5 from '/src/assets/showcase/dessert_5.jpg';


function PhotoShowcase() {
    return (
        <div className='photo-showcase-wrapper'>
        <div className="photo-showcase-container">
            <img src={img1} alt="flavor 1" className="photo photo-1" />
            <img src={img2} alt="flavor 2" className="photo photo-2" />
            <img src={img3} alt="flavor 3" className="photo photo-3" />
            <img src={img4} alt="flavor 4" className="photo photo-4" />
            <img src={img5} alt="flavor 5" className="photo photo-5" />
        </div>
        </div>
    );
}

export default PhotoShowcase;