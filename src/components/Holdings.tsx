import React, { useState, useEffect } from 'react'
import { fetchHoldings } from '../services/ibService'

interface Holding {
  symbol: string
  quantity: number
  marketPrice: number
  marketValue: number
  averageCost: number
  unrealizedPNL: number
}

const Holdings: React.FC = () => {
  const [holdings, setHoldings] = useState<Holding[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const getHoldings = async () => {
      try {
        const data = await fetchHoldings()
        setHoldings(data)
        setLoading(false)
      } catch (err) {
        setError('Failed to fetch holdings. Please try again later.')
        setLoading(false)
      }
    }

    getHoldings()
  }, [])

  if (loading) return <div>Loading...</div>
  if (error) return <div>{error}</div>

  return (
    <div className="holdings">
      <h2>Your Holdings</h2>
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Quantity</th>
            <th>Market Price</th>
            <th>Market Value</th>
            <th>Average Cost</th>
            <th>Unrealized P&L</th>
          </tr>
        </thead>
        <tbody>
          {holdings.map((holding, index) => (
            <tr key={index}>
              <td>{holding.symbol}</td>
              <td>{holding.quantity}</td>
              <td>${holding.marketPrice.toFixed(2)}</td>
              <td>${holding.marketValue.toFixed(2)}</td>
              <td>${holding.averageCost.toFixed(2)}</td>
              <td>${holding.unrealizedPNL.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Holdings