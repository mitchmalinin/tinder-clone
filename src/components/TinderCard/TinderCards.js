import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";

//database import
import database from "../../firebase";
import "./tinder_card.css";

const TinderCards = () => {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    database
      .collection("people")
      .onSnapshot((snapshot) =>
        setPeople(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);

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
