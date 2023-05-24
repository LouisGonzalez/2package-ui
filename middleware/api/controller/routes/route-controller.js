const axios = require('axios')

const getRoutes = async (req, res) => {
  try {
    const response = await axios.get('http://localhost:8081/ruta/get-rutas')
    return res.status(200).send(response)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getRoutes
}
