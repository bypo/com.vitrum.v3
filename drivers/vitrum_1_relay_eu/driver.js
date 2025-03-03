'use strict';

const Homey = require('homey');

class Vitrum3RelayDriver extends Homey.Driver {

  /**
   * onInit is called when the driver is initialized.
   */
  async onInit() {
    //super.onInit();

    this.vitrumSceneTrigger = this.homey.flow.getDeviceTriggerCard('vitrum1_scene');
    this.vitrumSceneTrigger.registerRunListener(async (args, state) => {
      return args.device.vitrumSceneRunListener (args, state);
    });

    // this.vitrumMultiLevelSwitchTrigger = this.homey.flow.getDeviceTriggerCard('vitrum6_dim');
    // this.vitrumMultiLevelSwitchTrigger.registerRunListener(async (args, state) => {
    //   return args.device.vitrumMultiLevelSwitchRunListener (args, state);
    // });
    this.log('vitrum_1_relay_eu has been initialized');
  }

  /**
   * onPairListDevices is called when a user is adding a device
   * and the 'list_devices' view is called.
   * This should return an array with the data of devices that are available for pairing.
   */
  async onPairListDevices() {
    return [
      // Example device data, note that `store` is optional
      // {
      //   name: 'My Device',
      //   data: {
      //     id: 'my-device',
      //   },
      //   store: {
      //     address: '127.0.0.1',
      //   },
      // },
    ];
  }

}

module.exports = Vitrum3RelayDriver;
