const express = require('express')

// Server
const app = express()
const PORT = process.env.PORT || 3001

async function bootstrap() {
  // MIddlewares
  const mongo_express = require('mongo-express/lib/middleware')
  const mongo_express_config = require('./config/mongo_express_config')

  // Express only serves static assets in production
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
  }

  app.use('/mongo_express', await mongo_express(mongo_express_config))

  app.get('/api/test', (req, res) => {
    res.json({
      success: true,
      message: 'API CALL Succeed!',
    })
  })

  app.listen(PORT, () => {
    console.log(`Find the server at: http://localhost:${PORT}`)
  })
}
bootstrap()
