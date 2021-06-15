import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

  const [book, setBook] = useState("");

  const [result, setResult] = useState([]);

  const [apiKey, setApiKey] = useState("AIzaSyBesfl57VKlcLdSi8qE3T7CBx-nwRhDNzs")


  const handleChange = (e) => {

    const book = e.target.value;
    setBook(book)

  }

  const handleSubmit = (e) => {

    e.preventDefault();

    console.log(book);


  }

  return (
    <div class="container">
      <h1>Google Books Search</h1>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <input type="text" onChange={handleChange} className="form-control mt-10" placeholder="I'm a bookworm."></input>
          <button type="submit" className="btn btn danger">Search</button>
        </div>
      </form>
    </div>
  )
}

export default App
