const testVar = {}

function testFunc() {
  return "hi"
}


const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
  //...
]


const superbowlWin = (records) => {
 let event = records.find(function(record) {
  return record.result === "W"
 });
  if (event) {
    return event.year
  }
    else {
      return undefined
    }
}

// const newSuperbowlWin = (records) => {
//   return records.find(function(record) {
//     if (record.result === "W") {
//     return record.year}
//   })
}