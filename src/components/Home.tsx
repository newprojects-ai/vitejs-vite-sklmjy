import React from 'react'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  return (
    <div className="home">
      <h1>Welcome to Your IB Account Manager</h1>
      <nav>
        <ul>
          <li><Link to="/holdings">Holdings</Link></li>
          <li><Link to="/transactions">Transactions</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Home