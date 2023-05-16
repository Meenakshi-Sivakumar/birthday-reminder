import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState([...data]);

  const removePerson = (id) => {
    const newPeople = people.filter(person => person.id !== id);
    setPeople(newPeople);
  }

  const clearAll = () => {
    setPeople([]);
  }

  return (
    <main>
      <div className='container'>
        <h3>{people.length} Birthdays To Wish</h3>
        {people.length === 0 ? <p>come back tomorrow</p> : ''}
        {people.map(person => <List key={person.id} {...person} removePerson={removePerson} />)}
        <button className='container-button' onClick={() => clearAll()}>clear all</button>
      </div>
    </main>
  );
}

export default App;