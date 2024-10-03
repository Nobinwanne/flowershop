import React from "react";
import heroimage from "../assets/images/florist_image.webp";
import herotulipimage from "../assets/images/florist_tulip.webp";
import "../components/Hero.scss";

function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <p className="hero__offer">20% Off For New Members</p>
          <h1 className="hero__headline">Your Special Day!</h1>
          <p className="hero__copy">We are here for your Special Day</p>
          <a href="#" className="cta-button">
            Start Shopping
          </a>
        </div>
        <div className="hero-image">
          <img src={herotulipimage} alt="Flowers" />
        </div>
      </section>

      <section className="offers">
        <div className="offer">
          <img src="free-delivery-icon.png" alt="Free Delivery" />
          <h4>Free Delivery</h4>
          <p>Free shipping around the world for all orders over $120</p>
        </div>
        <div className="offer">
          <img src="online-order-icon.png" alt="Online Order" />
          <h4>Online Order</h4>
          <p>Don't worry, you can order online by our site</p>
        </div>
        <div className="offer">
          <img src="freshness-icon.png" alt="Freshness" />
          <h4>Freshness</h4>
          <p>You have fresh flowers in every single order</p>
        </div>
        <div className="offer">
          <img src="made-by-artists-icon.png" alt="Made by Artists" />
          <h4>Made by Artists</h4>
          <p>World-className flowers, made by artists</p>
        </div>
      </section>
    </>
  );
}

export default Hero;
