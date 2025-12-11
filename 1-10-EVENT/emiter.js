const EVENTS = require('events')

class myEvent extends EVENTS {}

const event = new myEvent()

event.on('callNumber',(number)=>{
  console.log(`call from number ${number}`);
  
})


event.emit('callNumber','09979525484')