'use strict';

describe ('Thermostat', () => {

  let thermostat;

  beforeEach(() => {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', () => {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('increases the temperature with up()', () => {
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it('decreases the temperature with down()', () => {
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it('has a minimum of 10 degrees', () => {
    for (let i = 0; i < 11; i++) {
      thermostat.down();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

  it('has power saving mode on by default', () => {
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it('can switch power saving mode off', () => {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
  });

  describe('when power saving mode is on', () => {
    it('has a maximum temperature of 25 degrees', () => {
      for (let i = 0; i < 6; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    });
  });

  it('can be reset to the default temperature', () => {
    for (let i = 0; i < 6; i++) {
      thermostat.up();
    }
    thermostat.resetTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  describe('displaying usgae levels', () => {
    describe('when temperature is less than 18 degrees', () => {
      it('is low-usage', () => {
        for (let i = 0; i < 3; i++) {
          thermostat.down();
        }
        expect(thermostat.energyUsage()).toEqual('low-usage');
      }); 
    });

    describe('when temperature is more than 18 and less than 25 degrees', () => {
      it('is medium-usage', () => {
        expect(thermostat.energyUsage()).toEqual('medium-usage');
        });
      });
    });

    describe('when temperature is more than 25 degrees', () => {
      it('is high-usage', () => {
      thermostat.isPowerSavingMode = false;
      for (let i = 0; i < 6; i++) {
        thermostat.up();
      }
      expect(thermostat.energyUsage()).toEqual('high-usage');
      });
    });
});


