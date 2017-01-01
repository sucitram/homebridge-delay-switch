"use strict";

var Service, Characteristic;

module.exports = function(homebridge) {
 
  Service = homebridge.hap.Service;
  Characteristic = homebridge.hap.Characteristic;
  
  homebridge.registerAccessory("homebridge-delay-switch", "DelaySwitch", DelaySwitch);
}

function DelaySwitch(log, config) {
  this.log = log;
  this.name = config.name;
  
  this._service = new Service.Switch(this.name);
  this._service.getCharacteristic(Characteristic.On)
    .on('set', this._setOn.bind(this));
}

DelaySwitch.prototype.getServices = function() {
  return [this._service];
}

DelaySwitch.prototype._setOn = function(on, callback) {
  setTimeout(function() {
     this.log("Setting switch to " + on);
  }, 10000);
  if (on) {
    setTimeout(function() {
      this._service.setCharacteristic(Characteristic.On, false);
    }.bind(this), 1000);
  }
  
  callback();
}
