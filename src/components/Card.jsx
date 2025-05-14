import '/src/css/Card.css'
function DessertCard() {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src="/src/assets/desserts/strawberry_shorcake.jpg" className="card-img-top rounded-5 shadow" alt="dessert" />
            <div className="card-body text-center">
                <h5 className="card-title">Chocolate Cake</h5>
                <p className="card-text">Rich and moist chocolate layered cake.</p>
                <a href="#" className="btn btn-primary">Order Now</a>
            </div>
        </div>
    );
}

export default DessertCard;