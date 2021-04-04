const socket = require('../dist').default

/*test('Initialize', () => {
  socket.init({
    appUname: 'Test-e56e4bef',
    userId: '5fede0e97d65580008f79d81',
    userToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTAxOTA2OTIsImV4cCI6MTYxMDI3NzA5MiwiYXVkIjoiVGVzdC1lNTZlNGJlZiIsImlzcyI6Imh0dHBzOi8vZWFzZWF1dGguY2xvdWQucGllYml0cy5vcmciLCJzdWIiOiI1ZmVkZTBlOTdkNjU1ODAwMDhmNzlkODEifQ.MP4N-JW2Bbq5nHw-2TII6uDIew9CiI8yVJmBQAv_CjI'
  })
})*/

describe('SSM Tests', () => {
  it ('init', () => {
    socket.init({
      appUname: 'Test-e56e4bef',
      userId: '5fede0e97d65580008f79d81',
      userToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTAxOTA2OTIsImV4cCI6MTYxMDI3NzA5MiwiYXVkIjoiVGVzdC1lNTZlNGJlZiIsImlzcyI6Imh0dHBzOi8vZWFzZWF1dGguY2xvdWQucGllYml0cy5vcmciLCJzdWIiOiI1ZmVkZTBlOTdkNjU1ODAwMDhmNzlkODEifQ.MP4N-JW2Bbq5nHw-2TII6uDIew9CiI8yVJmBQAv_CjI'
    })
  })
})
