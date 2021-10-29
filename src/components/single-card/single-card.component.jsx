import React from "react";
import "./single-card.styles.css";

const SingleCard = ({ card, handleChoice, flipped }) => {
  const handleClick = () => {
    handleChoice(card);
  };

  return (
    <div className="card">
      <div>
        {flipped ? (
          <img className="front" src={card.src} alt="card-front" />
        ) : (
          <img
            className="back"
            src="/img/cover.png"
            alt="card-back"
            onClick={handleClick}
          />
        )}
      </div>
    </div>
  );
};

export default SingleCard;

//when a user click on a card it shos the pic
// card stays untill the second choice
//if the card matched it stays

//else it tursn back
