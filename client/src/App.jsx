import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import OrderPage from "./pages/OrderPage/OrderPage.jsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";
import { useState } from "react";
import "./App.css";

function App() {
    const [flowerBasket, setFlowerBasket] = useState([]);

    const handleFlowerBasketChange = (flower) => {
        setFlowerBasket([...flowerBasket, flower]);
    };

    return (
        <BrowserRouter>
            <Header flowerBasket={flowerBasket} />
            <Routes>
                <Route path="/" element={<HomePage addFlower={handleFlowerBasketChange} />} />
                <Route path="/order" element={<OrderPage flowerBasket={flowerBasket} />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
