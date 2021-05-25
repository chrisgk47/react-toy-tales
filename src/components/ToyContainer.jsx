import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => {
  return(
    <div id="toy-collection">
      {props.toys.map((toy) => (
        <ToyCard
          key={toy.id}
          toy={toy}
          deleteToy={props.deleteToy}
          addLikes={props.addLikes}
        />
      ))}
    </div>
  );
}

export default ToyContainer;
