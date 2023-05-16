import React from 'react';

const List = ({id, image, name, age, removePerson}) => {

  return (
    <div className='person'>
    <img src={image} alt={name}/>
    <div className='details'>
    <div>
      <h4>{name}</h4>
      <p>{`${age} years`}</p>
    </div>
    <div>
      <button onClick={() => removePerson(id)}>wished</button>
    </div> 
    </div>
    </div>
  );
};

export default List;
