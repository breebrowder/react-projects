import React, { useState } from 'react'
import data from './data' // import array from data.js
import List from './List' // import List component

function App() {

  const [people, setPeople] = useState(data) // using hooks; 'people' carries the objects current state, while setPeople updates its value

  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  )
}

export default App;
