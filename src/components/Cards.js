import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

const Cards = () => {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-4.jpeg"
              text="Explore the hidden watefall depp inside Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/img-9.jpg"
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Mystery"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-2.jpeg"
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Beach"
              path="/services"
            />
            <CardItem
              src="images/img-3.jpeg"
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Luxury"
              path="/services"
            />
            <CardItem
              src="images/img-1.jpeg"
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Peace"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
