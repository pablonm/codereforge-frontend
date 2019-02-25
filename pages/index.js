import React from 'react'
import axios from 'axios'
import Header from '../components/Common/Header/Header'

const Home = () => {
  return (
    <div>
      <Header />
      <div>Welcome to CodeReforge!</div>
    </div>
  )
}

Home.getInitialProps = async () => {
  const response = await axios.get('http://134.209.0.131/countries')
  return response.data
}

export default Home
