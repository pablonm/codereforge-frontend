const sitemap = require('sitemap')
const axios = require('axios')

const generateSitemap = async (posts, users) => {
  const urls = [
    {
      url: '/',
      changefreq: 'daily',
      priority: 1,
    },
    {
      url: '/users/leaderboard',
      changefreq: 'daily',
      priority: 0.8,
    },
    {
      url: '/post/new',
      changefreq: 'daily',
      priority: 0.5,
    },
  ]
  const postsUrls = posts.map(post => ({
    url: `/post/${post._id}`,
    changefreq: 'daily',
    priority: 0.8,
  }))
  const usersUrls = users.map(user => ({
    url: `/users/${user._id}`,
    changefreq: 'daily',
    priority: 0.6,
  }))
  return sitemap.createSitemap({
    hostname: 'http://codereforge.com',
    cacheTime: 600000,
    urls: [...urls, ...postsUrls, ...usersUrls],
  })
}

/* Get Sitemap */
const getSitemap = async (req, res) => {
  const posts = await axios.get(`${process.env.REACT_APP_API_URL}posts`)
  const users = await axios.get(`${process.env.REACT_APP_API_URL}users`)
  const map = await generateSitemap(posts.data, users.data)
  map.toXML((err, xml) => {
    if (err) return res.status(500).end()
    res.header('Content-Type', 'application/xml')
    return res.send(xml)
  })
}

module.exports = getSitemap
