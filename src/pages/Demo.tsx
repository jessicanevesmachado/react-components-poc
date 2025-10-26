import { Link } from 'react-router-dom'
import './Demo.css'

function Demo() {
  return (
    <div className='demo-container'>
      <h1>Home</h1>
      <p>Welcome to React Components POC</p>
      <Link to="/">Go to Home</Link>
    </div>
  )
}

export default Demo

