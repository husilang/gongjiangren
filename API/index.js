const express = require('express')

// Create express router
const router = express.Router()

// Transform req & res to have the same API as express
// So we can use res.status() & res.json()
var app = express()
router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)
  req.res = res
  res.req = req
  next()
})
// Add POST - /api/login

router.post('/login', (req, res) => {
  if (req.body.authStatus === 0) {
    req.session.firmUser = { authStatus:req.body.authStatus, id: req.body.id, loginName: req.body.loginName, token: req.body.token}
    return res.json({ authStatus:req.body.authStatus, id: req.body.id, loginName: req.body.loginName, token: req.body.token})
  }
  res.status(405).json({ message: '405 Bad credentials' })
})

// Add POST - /api/logout
router.post('/logout', (req, res) => {
  delete req.session.authUser
  res.json({ ok: true })
})

// Export the server middleware
module.exports = {
  path: '/api/',
  handler: router
}
