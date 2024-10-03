import "../Products/Products.scss";

function Products({ addFlower, flowerBasket }) {
    const handleClick = (flower) => {
        addFlower(flower);
    };

    return (
        <div className="product__container" id="flowers">
            {flowerBasket.map((flower) => {
                return (
                    <div className="product__card">
                        <img src={flower.img} alt="Product 1" className="product__image" />
                        <h2>{flower.name}</h2>
                        <h3 className="product__price">$5.99</h3>
                        {flower.meaning.map((a) => (
                            <p>{a + " "}</p>
                        ))}
                        <button className="product__button--add-to-cart" onClick={() => handleClick(flower)}>
                            Add to Cart
                        </button>
                    </div>
                );
            })}
        </div>
    );
}

export default Products;
