import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const Person = ({ img, name, job, children }) => {
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`
  return (
    <article className="person">
      <img src={url} alt="person" />
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </article>
  )
}

const PersonList = () => {
  return (
    <div>
      <h1 className="title">Person List</h1>
      <section className="person-list">
        <Person img="35" name="john" job="developer" />
        <Person img="32" name="jay" job="teller" >
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse explicabo culpa maiores.</p>
        </Person>
        <Person img="15" name="josh" job="cook" />
      </section>
    </div>

  )
}

ReactDOM.render(<PersonList />, document.getElementById("root"))