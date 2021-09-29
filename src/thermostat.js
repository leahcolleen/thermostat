'use strict';

class Thermostat {
  constructor() {
    this.MINIMUM_TEMPERATURE = 10;
    this.MAXIMUM_TEMPERATURE_POWER_SAVER=25;
    this.MAXIMUM_TEMPERATURE=32;
    this.temperature = 20;
    this.powerSavingMode = true;
    this.MAX_LIMIT_PSM_ON = 25;
    this.MAX_LIMIT_PSM_OFF = 32;
    this.DEFAULT_TEMPERATURE = 20;
  }
  getCurrentTemperature() {
    return this.temperature;
  }
  up() {
    if (this.isMaximumTemperature()) {
      return;
    }
    this.temperature += 1;
  }
  down() {
    if (this.isMinimumTemperature()) {
      return;
    }
    this.temperature -= 1;
  }
  isMinimumTemperature() {
    return this.temperature === this.MINIMUM_TEMPERATURE;
  }
  isMaximumTemperature() {
    if (this.isPowerSavingModeOn() === false) {
      return this.temperature === this.MAXIMUM_TEMPERATURE;
    }
    return this.temperature === this.MAXIMUM_TEMPERATURE_POWER_SAVER;
  }
  isPowerSavingModeOn() {
    return this.powerSavingMode === true;
  }
  switchPowerSavingModeOff() {
    this.powerSavingMode = false;
  }
  isMaximumTemperature() {
    if (this.isPowerSavingModeOn() === false) {
      return this.temperature === this.MAX_LIMIT_PSM_OFF;
    }
      return this.temperature === this.MAX_LIMIT_PSM_ON;
  }

  resetTemperature() {
    this.temperature = this.DEFAULT_TEMPERATURE;
  }
}