function iterativeLog(array) {
  array.forEach((element, index, array) => {
    console.log(`${index}: ${element}`);
  })
}

function iterate(callback) {
  var countries = ["France", "Italy", "Portugal"];
  countries.forEach(callback);
  return countries;
}

function doToArray(array, callback) {
  array.forEach(callback);
}