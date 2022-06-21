// Your code here
const createEmployeeRecord =(array)=>{
    return {
    firstName:array[0],
    familyName:array[1],
    title:array[2],
    payPerHour:array[3],
    timeInEvents:[],
    timeOutEvents:[],
    }
    return details
}
const createEmployeeRecords=(employee)=>{
    return employee.map((array)=>{return createEmployeeRecord(array)})
}


let createTimeInEvent = function(dateStamp){
    let [date, hour] = dateStamp.split(' ')

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })

    return this
}
let createTimeOutEvent = function(dateStamp){
    let [date, hour] = dateStamp.split(' ')

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })

    return this
}

let hoursWorkedOnDate = function(neededDate){
    let morning = this.timeInEvents.find(function(e){
        return e.date === neededDate
    })

    let evening = this.timeOutEvents.find(function(e){
        return e.date === neededDate
    })

    return (evening.hour - morning.hour) / 100
}
let wagesEarnedOnDate = function(neededDate){
    let rawWage = hoursWorkedOnDate.call(this, neededDate)
        * this.payPerHour
    return parseFloat(rawWage.toString())
}
let findEmployeeByFirstName = function(array, firstName) {
    return array.find(function(data){
      return data.firstName === firstName
    })
  }
  let calculatePayroll = function(arrayOfEmployees){
    return arrayOfEmployees.reduce(function(memo, data){
        return memo + allWagesFor.call(data)
    }, 0)
}
const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })
 
     const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) 
 
 return payable
 }
 

 