import React from 'react'
import axios from 'axios'

const Home = () => {
  console.log('props b:', props)
  return <div>Welcome to Jami!</div>
}

Home.getInitialProps = async () => {
  const response = await axios.get('http://134.209.0.131/countries')
  return response.data
}

export default Home
