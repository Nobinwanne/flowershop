import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import OrderPage from "./pages/OrderPage/OrderPage.jsx";
import axios from "axios";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
    const [flowerBasket, setFlowerBasket] = useState([]);
    const [search, setSearch] = useState("");

    const handleFlowerBasketChange = (flower) => {
        setFlowerBasket([...flowerBasket, flower]);
    };

    const handleSearchChange = (newSearch) => {
        setSearch(newSearch);
    };

    const searchFlowers = async () => {
        try {
            console.log(search);
            const searchObj = {
                meaning: search,
            };
            const response = await axios.post("http://localhost:8090/flowers/search", searchObj);
            console.log(response);

            setFlowerBasket(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const onSearchClick = async () => {
        await searchFlowers();
    };

    useEffect(() => {
        const test = async () => {
            const response = await axios.get("http://localhost:8090/flowers");
            setFlowerBasket(response.data);
        };
        test();
    }, []);

    console.log(flowerBasket);

    return (
        <BrowserRouter>
            <Header
                flowerBasket={flowerBasket}
                search={search}
                handleSearchChange={handleSearchChange}
                onSearchClick={onSearchClick}
            />
            <Routes>
                <Route
                    path="/"
                    element={<HomePage addFlower={handleFlowerBasketChange} flowerBasket={flowerBasket} />}
                />
                <Route path="/order" element={<OrderPage flowerBasket={flowerBasket} />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
