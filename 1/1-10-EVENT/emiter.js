const EVENTS = require("events");

class myEvent extends EVENTS {
  emiterAction(params) {
    const b = {
      id: 1,
      name: "mohamad",
      phone: "09929700252",
    };
    this.emit(params, b);
    console.log(`you have call from this number ${b.phone}`);
  }
}

module.exports = myEvent;
