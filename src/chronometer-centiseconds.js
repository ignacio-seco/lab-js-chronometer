class Chronometer {
  constructor() {
    this.currentTime=0
    this.intervalId=null
  
  }

  start(printTimeCallback) {
    this.intervalId=setInterval(()=>
    {
      this.currentTime++;
      if(printTimeCallback!==undefined)
      {
        printTimeCallback()
      }
    }
      ,10)

  }

  getMinutes() {
    return Math.floor(this.currentTime/6000)

  }

  getSeconds() {
    return Math.floor((this.currentTime%6000)/100)
   
  }

  getCentiseconds() {
    return this.currentTime - (((Math.floor(this.currentTime/6000))*6000)+((Math.floor((this.currentTime%6000)/100))*100))
    
  }

  computeTwoDigitNumber(value) {
    let newValue= value.toString()
    let displayValue
    if(newValue.length===1){displayValue=0+newValue} else displayValue=newValue
    return displayValue
    
  }

  stop() {
    clearInterval(this.intervalId)
   
  }

  reset() {
    this.currentTime=0
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}.${this.computeTwoDigitNumber(this.getCentiseconds())}`
  }
}
