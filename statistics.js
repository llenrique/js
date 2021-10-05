const numbersList = [
  200,
  100,
  200,
  100,
  200,
  50,
  50,
  50,
  50,
  50,
  50
]

/**
 * Returns the sum of a Integer number list
 * @param {[Integer]} numbersList 
 * @returns {Integer}
 */
function numbersListSum(numbersList) {
  return numbersList.reduce((acc = 0, currentValue) => acc + currentValue)
}

/**
 * Returns the average of a Integer number list
 * @param {[Integer]} numbersList 
 * @returns {Integer}
 */
function numberListAverage(numbersList) {
  const sumNumbersList = numbersListSum(numbersList)
  return sumNumbersList / numbersList.length
}

/**
 * Returns the median of a Integer number list
 * this could be a odd or even number list length
 * @param {[Integer]} numbersList 
 * @returns {Integer}
 */
function numberListMedian(numbersList) {
  let sortedNumbersList = numbersList.sort((a, b) => a - b)
  const medianIndex = Math.floor(sortedNumbersList.length/2)
  if (sortedNumbersList.length % 2 == 0) {
    const pairList = sortedNumbersList.slice(medianIndex - 1, medianIndex + 1)
    return numberListAverage(pairList)
  } else {

    return sortedNumbersList[medianIndex]
  }
}

/**
 * Calculates the mode (the most repeated value) for a integer numbers list.
 * @param {[Integer]} numbersList 
 * @returns {String} 
 */
function numbersListMode(numbersList) {
  let groupedCounts = {}
  numbersList.map(function(element){
    if(!groupedCounts[element]){
      let filteredCount = numbersList.filter((x) => x == element)
      groupedCounts[element] = filteredCount.length
    }
  })

  const mode = Object.entries(groupedCounts).sort(function(a, b){
    return a[1] - b[1]
  })

  return mode[mode.length - 1]
} 