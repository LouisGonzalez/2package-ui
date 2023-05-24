const axios = require('axios')

const login = async (req, res) => {
  try {
    const response = await axios.post('http://localhost:8080/auth/login', {
      username: req.body.username,
      password: req.body.password
    })
    return res.status(200).send(response.data)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  login
}
