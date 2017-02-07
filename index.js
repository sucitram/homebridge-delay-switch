var Service, Characteristic, Accessory;

module.exports = function(homebridge) {
 
  Service = homebridge.hap.Service;
  Characteristic = homebridge.hap.Characteristic;
  Accessory = homebridge.hap.Accessory;
  homebridge.registerAccessory("homebridge-delay-switch", "DelaySwitch", DelaySwitch);
}

function DelaySwitch(log, config) {
  this.log = log;
  this.name = config['name'];
  this.delayTime = config['delay'];
  this.Timer;
}

DelaySwitch.prototype.getServices = function() {
 this.service = new Service.Switch(this.name);
 
 this.service.addCharacteristic(Characteristic.On);
    this.service.getCharacteristic(Characteristic.On)
        .on('set', this.setOn.bind(this));
 
  return [this._service];
}

DelaySwitch.prototype.setOn = function(on, callback) {
 this.log("Setting switch to " + on);
 if (on) {
    this.Timer = setTimeout(function() {
      this.service.setCharacteristic(Characteristic.On, false);
    }, this.delayTime);
  }
  else { 
   clearTimeout(this.Timer);
  }
  
  callback();
}
