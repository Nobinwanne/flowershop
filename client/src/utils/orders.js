let _flowerBasket = [];

const getFlowerBasket = () => {
    return _flowerBasket;
};

const addToCart = (flower) => {
    console.log(flower);
    _flowerBasket.push(flower);
};

export default {
    getFlowerBasket,
    addToCart,
};
