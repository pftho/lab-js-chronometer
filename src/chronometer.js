class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    let intervalId = setInterval(() => {
      this.currentTime += 1;
      if (printTimeCallback != undefined) {
        printTimeCallback();
      }
    }, 1000);
    this.intervalId = intervalId;
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }

  getSeconds() {
    let seconds = this.currentTime % 60;
    return seconds;
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return `${"0" + value}`;
    } else if (value > 10) {
      return `${value}`;
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    if (this.getMinutes() !== undefined || this.getSeconds() !== undefined) {
      return `${this.computeTwoDigitNumber(
        this.getMinutes()
      )}:${this.computeTwoDigitNumber(this.getSeconds())}`;
    }
  }
}
