'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.post('/user', 'UserController.store')
Route.post('/session', 'SessionController.store')

Route.post('/passwords', 'ForgotPasswordController.store')
Route.put('/passwords', 'ForgotPasswordController.update')

Route.post('/files', 'FileController.store')
