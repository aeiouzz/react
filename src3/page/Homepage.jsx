import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <>
     <div>Homepage</div>
    <button>
      <Link to="/about">About</Link>
    </button>
    <button>
      <Link to="/contact">Contact</Link>
    </button>
    </>
  )
}

export default Homepage