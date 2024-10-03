import "../Products/Products.scss";
import orders from "../../utils/orders.js";
import { useEffect, useState } from "react";
import axios from "axios";

function Products() {
    const handleClick = () => {
        orders.addToCart("test");
        console.log(orders.getFlowerBasket());
    };

    const [flowers, setFlowers] = useState([]);

    useEffect(() => {
        const test = async () => {
            const response = await axios.get("http://localhost:8090/flowers");
            setFlowers(response.data);
        };
        test();
    }, []);

    console.log(flowers);

    return (
        <div className="product__container">
            <div className="product__card">
                <img src="https://via.placeholder.com/150" alt="Product 1" className="product__card--image" />
                <h3 className="product__price">$29.99</h3>
                <button className="product__button--add-to-cart">Add to Cart</button>
            </div>
            <div className="product__card">
                <img src="https://via.placeholder.com/150" alt="Product 2" className="product__card--image" />
                <h3 className="product__price">$39.99</h3>
                <button className="product__button--add-to-cart">Add to Cart</button>
            </div>
            <div className="product__card">
                <img src="https://via.placeholder.com/150" alt="Product 3" className="product__card--image" />
                <h3 className="product__price">$49.99</h3>
                <button className="product__button--add-to-cart">Add to Cart</button>
            </div>
            <div className="product__card">
                <img src="https://via.placeholder.com/150" alt="Product 4" className="product__card--image" />
                <h3 className="product__price">$59.99</h3>
                <button className="product__button--add-to-cart" onClick={handleClick}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default Products;
