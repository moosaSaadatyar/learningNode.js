const EVENTS = require('events')

class myEvent extends EVENTS {}

const event = new myEvent()

event.on('callNumber',(number)=>{
  console.log(`call from number ${number}`);
  
})



const emitMyEvent= require('./emiter')
const logerEvent = new emitMyEvent()
logerEvent.emiterAction('awq')