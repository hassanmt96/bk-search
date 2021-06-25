import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AddReadingList from './components/AddReadingList'

function useLocalState(key, initial) {
  const [value, setValue] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = window.localStorage.getItem(key);
      if (saved !== null) {
        return JSON.parse(saved);
      }
    }

    return initial;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}

const App = () => {

  const [value, setValue] = useLocalState("", "");

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

  const Button = ({ name, handleClick }) => {
    return (
      <input className="btn btn danger" type="submit" value={name} onClick={handleClick} />
    );
  }

  return (
    <div class="container-fluid">
      <h1>Google Books Search</h1>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <input type="text" onChange={handleChange} className="form-control mt-10" placeholder="I'm a bookworm."></input>
          <Button name='look for a book' />
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
        <div onChange={(e) => setValue(e.target)} />
      </div>
    </div>
  )
}

export default App

