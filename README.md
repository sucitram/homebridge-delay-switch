
# "Delay Switches" Plugin

## Example config.json:

 ```
    "accessories": [
        {
          "accessory": "DelaySwitch",
          "name": "DelaySwitch",
          "delay": 5000
        }   
    ]

```

## Why do we need this plugin?

With this plugin, you can create any number of fake switches that will do nothing when turned on (and will automatically turn off after the delay time set in the config, simulating a stateless switch). This can be very useful for advanced automation with HomeKit scenes - when a delayed action is required.

For example, when using smart wall switch (to turn on) and RGB light bulb (to switch color) together on the same scene can cause no action on the bulb since the bulb might not even be on when the command has been sent from homebridge.

I'm using RF wall switches and a MiLight RGBW bulbs with that switch. When coming home, I wish to turn on the switch and change the color of the bulb, using it on the same scene (or even another scene connected with dummy switch) causing the RGB bulb not to change cause the command is faster than the bulb actually turning on.
therefore, a delay switch is needed.

Also it can be use with any device that require a certain delay time from other devices (TV + RPi-Kodi  /  PC + SSH / etc...)

## How it works

Basically, all you need to do is:
1. Set the desired delay time in the config file (in milliseconds).
2. Use this switch in any scene or automation.
3. Set an automation to trigger when this switch is turned off - "EVE" app is very recommended to set this automation.

## How to install

 ```sudo npm install -g homebridge-delay-switch```
 
## Credits
This plugin was forked from and inspired by homebridge-dummy by @nfarina

_________________________________________
#### Creating and maintaining Homebridge plugins consume a lot of time and effort, if you would like to share your appreciation, feel free to "Star" or donate. 

<a target="blank" href="https://www.paypal.me/nitaybz"><img src="https://img.shields.io/badge/Donate-PayPal-blue.svg"/></a>
<a target="blank" href="https://blockchain.info/payment_request?address=18uuUZ5GaMFoRH5TrQFJATQgqrpXCtqZRQ"><img src="https://img.shields.io/badge/Donate-Bitcoin-green.svg"/></a>

[Click here](https://github.com/nitaybz?utf8=%E2%9C%93&tab=repositories&q=homebridge) to review more of my plugins.
_________________________________________
