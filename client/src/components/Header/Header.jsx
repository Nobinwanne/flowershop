import { Link } from "react-router-dom";
import { Search, User, ShoppingCart } from "lucide-react";
import "./Header.scss";

const Logo = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="header__logo-image">
        <circle cx="50" cy="50" r="48" fill="#FF6B6B" />
        <path d="M50 20 C60 40 80 50 50 80 C20 50 40 40 50 20" fill="#4ECDC4" />
        <circle cx="50" cy="50" r="10" fill="#45B7D1" />
    </svg>
);

const Header = ({ flowerCount }) => {
    return (
        <header className="header">
            <Link to="/">
                <div className="header__logo">
                    <Logo />
                </div>
            </Link>
            <nav className="header__nav">
                <ul className="header__nav-list">
                    <li className="header__nav-item">
                        <Link to="/" className="header__nav-link">
                            HOME
                        </Link>
                    </li>
                    <li className="header__nav-item header__nav-item--with-badge">
                        <a href="#shop" className="header__nav-link">
                            SHOP
                        </a>
                        <span className="header__nav-badge header__nav-badge--new">NEW</span>
                    </li>
                    <li className="header__nav-item header__nav-item--with-badge">
                        <a href="#products" className="header__nav-link">
                            PRODUCTS
                        </a>
                        <span className="header__nav-badge header__nav-badge--sale">SALE</span>
                    </li>
                    <li className="header__nav-item">
                        <a href="#contact" className="header__nav-link">
                            CONTACT
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="header__actions">
                <div className="header__search">
                    <label htmlFor="search" className="header__search-label">
                        <Search className="header__icon" />
                    </label>
                    <input id="search" type="text" placeholder="Search our store" className="header__search-input" />
                </div>
                <User className="header__icon" />
                <div className="header__cart">
                    <Link to="order">
                        <ShoppingCart className="header__icon" />
                        <span className="header__cart-badge">{flowerCount}</span>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
