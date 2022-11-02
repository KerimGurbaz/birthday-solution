import React, { useState } from 'react'
import data from './data'
import List from './List'
function App() {
  const [people, setPeople] = useState(data)
  const [show, setShow] = useState('Clear All')

  const handleClick = (e)=>{
    people.length > 0 ? setPeople([]) : setPeople(data)
    people.length > 0 ? setShow("Return") : setShow('Clear All')
    
  }

  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={handleClick}>{show}</button>
      </section>
    </main>
  )
}

export default App