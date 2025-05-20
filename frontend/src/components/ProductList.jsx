import {useEffect, useState} from 'react';
import axios from 'axios';
import Card from './Card';

function ProductList() {
    const [popular, setPopular] = useState([]);
    const [regular, setRegular] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/products')
            .then(res => {
                const all = res.data;
                const popularItems = all.filter(item => item.is_popular === true);
                const regularItems = all.filter(item => !item.is_popular);
                setPopular(popularItems);
                setRegular(regularItems);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <>
            <div className="container mt-5">
                {/* Popular Section */}
                {popular.length > 0 && (
                    <>
                        <h3 className="text-center mb-4" id={'popular'}>🌟 Popular Desserts</h3>
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mb-5">
                            {popular.map(product => (
                                <div className="col d-flex justify-content-center" key={product.id}>
                                    <Card
                                        productName={product.name}
                                        price={product.price}
                                        image={product.image_url}
                                        productId={product.id}
                                        description={product.description}
                                    />
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {/* Regular Section */}
                {regular.length > 0 && (
                    <>
                        <h3 className="text-center mb-4" id={'more'}>More Desserts</h3>
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                            {regular.map(product => (
                                <div className="col d-flex justify-content-center" key={product.id}>
                                    <Card
                                        productName={product.name}
                                        price={product.price}
                                        image={product.image_url}
                                        productId={product.id}
                                        description={product.description}
                                    />
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>

            <div className="container mt-5" style={{color:"#9d1347"}}>
                <div className='text-center h1 p-5' style={{fontFamily: ' "Roboto Mono", monospace'}}>Not enough? Come
                    to visit us for more exclusive desserts!
                </div>
                <address className='text-center' style={{fontStyle: 'Roboto Mono', lineHeight: '1.5'}}>
                    Tao Su<br/>
                    123 Main Street<br/>
                    New York, NY 10001<br/>
                    <a href="mailto:john@example.com" style={{textDecoration: "none", color: "#ef88ad"}}>taosu@example.com</a>
                </address>
            </div>
        </>
    );
}

export default ProductList;