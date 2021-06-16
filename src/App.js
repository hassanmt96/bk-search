import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AddReadingList from './components/AddReadingList'

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

    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book + "&key=" + apiKey + "&maxResults=5").then(data => {
      console.log(data.data.items)
      setResult(data.data.items)
    })


  }

  // const addReading = (book) => {
  //   const newReadingList = [...]
  // }

  return (
    <div class="container-fluid">
      <h1>Google Books Search</h1>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <input type="text" onChange={handleChange} className="form-control mt-10" placeholder="I'm a bookworm."></input>
          <button type="submit" className="btn btn danger">Search</button>
        </div>
      </form>

      {result.map(book => (
        <a target="_blank" href={book.volumeInfo.previewLink}>
          <h4>{book.volumeInfo.title}</h4>
          <h6>{book.volumeInfo.authors}</h6>
          <h6>{book.volumeInfo.publisher}</h6>
          <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title} />
          <AddReadingList />
        </a>
      ))}

      {/* <ReadingList /> */}
      <div>
        <h2>Reading List</h2>
        <a></a>
      </div>
    </div>
  )
}

export default App
