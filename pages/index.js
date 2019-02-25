import React from 'react'
import axios from 'axios'
import { Button } from 'antd'
import { login } from '../utils/auth0'
import Header from '../components/Common/Header/Header'

const Home = () => {
  const loginHandler = () => {
    login()
  }
  return (
    <div>
      <Header />
      <div>Welcome to Jami!</div>
      <Button type="primary" onClick={loginHandler}>
        Login
      </Button>
    </div>
  )
}

Home.getInitialProps = async () => {
  const response = await axios.get('http://134.209.0.131/countries')
  return response.data
}

export default Home
