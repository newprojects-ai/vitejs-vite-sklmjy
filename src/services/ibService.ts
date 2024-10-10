import axios from 'axios'

const API_BASE_URL = 'http://localhost:5000/api' // Adjust this to your local IB gateway API endpoint

export const fetchHoldings = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/holdings`)
    return response.data
  } catch (error) {
    console.error('Error fetching holdings:', error)
    throw error
  }
}