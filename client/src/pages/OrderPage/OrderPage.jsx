import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./OrderPage.scss";

const OrderForm = ({ flowers }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        flowerType: "",
        quantity: 1,
        deliveryDate: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    return (
        <div className="order-form">
            <h1 className="order-form__title">Place Your Flower Order</h1>
            <form onSubmit={handleSubmit} className="order-form__form">
                <div className="order-form__field">
                    <label htmlFor="name" className="order-form__label">
                        Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="order-form__input"
                    />
                </div>
                <div className="order-form__field">
                    <label htmlFor="email" className="order-form__label">
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="order-form__input"
                    />
                </div>
                <div className="order-form__field">
                    <label htmlFor="phone" className="order-form__label">
                        Phone:
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="order-form__input"
                    />
                </div>
                <div className="order-form__field">
                    <label htmlFor="address" className="order-form__label">
                        Delivery Address:
                    </label>
                    <textarea
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        className="order-form__input order-form__input--textarea"
                    />
                </div>
                <div className="order-form__field">
                    <label htmlFor="flowerType" className="order-form__label">
                        Flowers:
                    </label>
                    {flowers?.map((flower) => {
                        return <div>{flower.name}</div>;
                    })}
                </div>
                <div className="order-form__field">
                    <label htmlFor="message" className="order-form__label">
                        Special Instructions:
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="order-form__input order-form__input--textarea"
                    />
                </div>
                <button type="submit" className="order-form__submit">
                    <Link id="test" to="/">
                        Place Order
                    </Link>
                </button>
            </form>
        </div>
    );
};

export default OrderForm;
