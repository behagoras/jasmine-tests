




function getMonthApi() {
  this.monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

  this.currentDate = new Date()
  this.cmonth = this.currentDate.getMonth()

  this.currentMonth = function () {
    return this.monthNames[this.cmonth-1]
  }

  this.nextMonth = function () {
    return this.monthNames[this.cmonth]
  }

}

function MonthCalculator() {

  this.api = new getMonthApi();

  this.getNextMonth = function() {
    return this.api.nextMonth();
  }
  this.getCurrentMonth = function() {
    return this.api.currentMonth();
  }
}

// const monthCalculator = new MonthCalculator()
// console.log(monthCalculator.getCurrentMonth())

module.exports = MonthCalculator