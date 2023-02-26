import React, { useState } from 'react';
import './FoodList.css';

function FoodList(props) {
  const [votes, setVotes] = useState(0);

  const handleVoteClick = () => {
    if (votes < 10) {
      setVotes(votes + 1);
      props.onVote(props.name);//
    } else {
      window.alert("Cannot vote more");
    }
  };
  
  const handleUnvoteClick = () => {
    if (votes > 0) {
      setVotes(votes - 1);
      props.onUnvote(props.name);
    } else {
      window.alert("Cannot unvote");
    }
  };

  let voteQuantity = votes === 0 ? "MIN" : votes === 10 ? "MAX" : votes;

  return (
    <div className="food-list-container">
      <div className="food-list-text">
        <h1>{props.type}</h1>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <div className="food-list-vote-container">
          <button onClick={handleVoteClick}>
            Clik to Vote
          </button>
          <p>{voteQuantity}</p>
          <button onClick={handleUnvoteClick}>
            Click to Unvote
          </button>
        </div>
      </div>
      <div className="food-list-image">
        <img src={props.image} alt={props.name} />
      </div>
    </div>
  );
}

export default FoodList;
