const TcpServer = require('multiwii-msp').TcpServer
const server = new TcpServer(3002, true)
const dualShock = require('dualshock-controller')
const controller = dualShock(
  { config : "dualShock3",
    accelerometerSmoothing : true,
    analogStickSmoothing : false })

var stick = {}

console.log('first stick'+JSON.stringify(stick))
controller.on('square:press', function (data) {
  stick = data
  console.log('second stick'+JSON.stringify(stick))
})

function log () {
  console.log('third stick'+JSON.stringify(stick))
}

setTimeout(log, 5000)

controller.on('error', function(data) {
  console.log('error')
})

server.on('register', function (key, device) {

  device.on('open', function () {

  })

  device.on('update', function (data) {
    var stickObject = {}
    device.setRawRc(stickObject, function (error, ident) {
      console.log('send message'+ident)
      console.log('send data'+stick)
    })
  })

  device.on('close', function () {

  })
  
    
})

