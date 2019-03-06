const getRobots = async (req, res) => {
  res.header('Content-Type', 'text/plain')
  res.status(200).send(`User-agent: *
Disallow: 
Disallow: /cgi-bin/
Disallow: /redirect
Sitemap: http://codereforge.com/sitemap.xml
  `)
}

module.exports = getRobots
