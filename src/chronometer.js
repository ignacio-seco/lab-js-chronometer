class Chronometer {
  constructor() {
        // ... your code goes here
        this.currentTime=0
        this.intervalId=null
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() => 
    {
      this.currentTime+=1;
      if(printTimeCallback!==undefined)
      {
      printTimeCallback()
    }    
  },1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime/60)
  }

  getSeconds() {
    return this.currentTime%60
  }

  computeTwoDigitNumber(value) {
    let newValue= value.toString()
    let displayValue
    if(newValue.length===1){displayValue=0+newValue} else displayValue=newValue
    return displayValue
  }

  stop() {
    clearInterval(this.intervalId) 
    // ... your code goes here
  }

  reset() {
    this.currentTime=0
    // ... your code goes here
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
    // ... your code goes here
  }
}
