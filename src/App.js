import React from 'react'
import axios from 'axios'

const App = () => {
  return (
    <div class="container">
      <h1>Google Books Search</h1>
      <form>
        <div class="form-group">
          <input type="text" className="form-control mt-10" placeholder="I'm a bookworm."></input>
          <button type="submit" className="btn btn danger">Search</button>
        </div>
      </form>
    </div>
  )
}

export default App
