import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";

//database import
import database from "../../firebase";
import "./tinder_card.css";

const TinderCards = () => {
  const [people, setPeople] = useState([
    {
      name: "Sakura",
      url:
        "https://vignette.wikia.nocookie.net/naruto/images/6/64/Sakura_Part_1.png/revision/latest/scale-to-width-down/340?cb=20170726101444",
    },
    {
      name: "Hinata",
      url:
        "https://vignette.wikia.nocookie.net/naruto/images/7/79/Hinata_Part_II.png/revision/latest?cb=20160916060747",
    },
  ]);

  useEffect(() => {}, [people]);

  return (
    <div>
      <h1>Tinder Cards</h1>

      <div className="tinderCard_cardContainer">
        {people.map((person) => {
          return (
            <TinderCard
              key={person.name}
              className="swipe"
              preventSwipe={["up", "down"]}
            >
              <div
                className="card"
                style={{ backgroundImage: `url(${person.url})` }}
              >
                <h3>{person.name}</h3>
              </div>
            </TinderCard>
          );
        })}
      </div>
    </div>
  );
};

export default TinderCards;
