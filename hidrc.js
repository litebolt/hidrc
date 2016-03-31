const TcpServer = require('multiwii-msp').TcpServer
const server = new TcpServer(3002, true)
const dualShock = require('dualshock-controller');
const controller = dualShock(
  { config : "dualShock3",
    accelerometerSmoothing : true,
    analogStickSmoothing : false })

controller.on('error', function(data) {
  console.log('error')
})

controller.on('square:press', function (data) {
  console.log('square pressed')
})

controller.on('square:press', function (data) {

})


server.on('register', function (key, device) {

  device.on('open', function () {
    device.setRawRc({}, function (error, ident) {
      console.log('message sent prolly')
    })
  })

  device.on('update', function (data) {

  })

  device.on('close', function () {

  })
})


