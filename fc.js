var TcpClient = require('multiwii-msp').TcpClient;
const client = new TcpClient('192.168.0.1', 3002, '/dev/ttyAMA0', 115200, true)
