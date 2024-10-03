import React from "react";
import herotulipimage from "../../assets/images/florist_tulip.webp";
import "./Hero.scss";
import deliveryicon from "../../assets/icons/delivery-icon.svg";
import artistsicon from "../../assets/icons/artists-icon.svg";
import freshnessicon from "../../assets/icons/freshness-icon.svg";
import ordericon from "../../assets/icons/order-icon.svg";

function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero__text">
          <p className="hero__offer">20% Off For New Members</p>
          <h1 className="hero__header">Your Special Day!</h1>
          <p className="hero__copy">We are here for your Special Day</p>
          <a href="#" className="hero__cta-button">
            Start Shopping
          </a>
        </div>
        <div className="hero__image">
          <img
            className="hero__image--flower"
            src={herotulipimage}
            alt="Flowers"
          />
        </div>
      </section>

      <section className="offers">
        <div className="offer">
          <img className="offer__icon" src={deliveryicon} alt="Free Delivery" />
          <h4 className="offer__copy">Free Delivery</h4>
          <p className="offer__copy--phrase">
            Free shipping around the world for all orders over $120
          </p>
        </div>
        <div className="offer">
          <img className="offer__icon" src={ordericon} alt="Online Order" />
          <h4 className="offer__copy">Online Order</h4>
          <p className="offer__copy--phrase">
            Don't worry, you can order online by our site
          </p>
        </div>
        <div className="offer">
          <img className="offer__icon" src={freshnessicon} alt="Freshness" />
          <h4 className="offer__copy">Freshness</h4>
          <p className="offer__copy--phrase">
            You have fresh flowers in every single order
          </p>
        </div>
        <div className="offer">
          <img
            className="offer__icon"
            src={artistsicon}
            alt="Made by Artists"
          />
          <h4 className="offer__copy">Made by Artists</h4>
          <p className="offer__copy--phrase">
            World-className flowers, made by artists
          </p>
        </div>
      </section>
    </>
  );
}

export default Hero;
