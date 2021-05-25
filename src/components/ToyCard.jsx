import React, { Component } from 'react';

class ToyCard extends Component {
  render() {
    const {toy, deleteToy, addLikes} = this.props
    const {name, image, likes, id} = toy

    return (
      <div className="card" id={id}>
        <h2>{name}</h2>
        <img src={image} alt={name} className="toy-avatar" />
        <p>{likes} Likes </p>
        <button onClick={() => addLikes(toy)} className="like-btn">Like {'<3'}</button>
        <button onClick={() => deleteToy(id)} className="del-btn">Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
