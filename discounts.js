// Constants
/**
 * Defines valid coupons codes
 */
const coupons = {
  'discount5': 5,
  'discount10': 10,
  'discount15': 15,
}

// Utils
/**
 * Shows a complete list of results in a resultParagraph id element
 * @param {number} fullPrice 
 * @param {number} discount
 * @param {number} discountedAmount
 * @param {number} finalAmount
 * @param {number} percentageProportion
 */
function showResults(fullPrice, discount, discountedAmount, finalAmount, percentageProportion){
  let resultParagraph = document.getElementById("showResult")

  resultParagraph.innerHTML = "Full Price: " + fullPrice + "</br>" + "Discount: " + discount + "%</br>" + "Discounted Amount: " + discountedAmount + "</br>" + "Final Amount: " + finalAmount + "</br>" + "Percentage to pay: " + percentageProportion + "%"
}

/**
 * Returns the value of the given input id
 * @param {string} valueName 
 * @returns {number}
 */
function getValueFor(valueName){
  let value = document.getElementById(valueName).value
  return parseFloat(value)
}


// Calculations
/**
 * Calculates the percentage proportion
 * @param {number} discount 
 * @returns {number}
 */
function getPercentageProportion(discount){
  return 100 - discount
}

/**
 * Calculate the final amount applying a discount factor to a given quantity
 * @param {number} fullPrice 
 * @param {number} discount 
 * @returns {number}
 */
function getFinalPrice(fullPrice, discount){
  let percentageProportion = getPercentageProportion(discount)
  return (fullPrice * percentageProportion) / 100
}

/**
 * Calculates the discounted amount for a given quantity
 * @param {number} fullPrice 
 * @param {number} discount 
 * @returns {number}
 */
function getDiscountedAmount(fullPrice, discount){
  let finalAmount = getFinalPrice(fullPrice, discount)
  return fullPrice - finalAmount
}

/**
 * 
 * @param {string} coupon 
 * @returns {number}
 */
function getDiscountFromCoupon(coupon){
  if (!coupons[coupon]){
    alert("Please type a valid coupon code")
    return 0
  } else {
    return coupons[coupon]
  }
}

/**
 * Calculate the discount for a given quantity 
 * and shows the result in a paragraph.
 * @typedef {()} StringLike
 */
function calculateDiscount(){
  let fullPrice = getValueFor("fullPrice")
  let discountCoupon = document.getElementById("discountCoupon").value

  discount = getDiscountFromCoupon(discountCoupon)

  let discountedAmount = getDiscountedAmount(fullPrice, discount)
  let finalAmount = getFinalPrice(fullPrice, discount)
  let percentageProportion = getPercentageProportion(discount)

  showResults(fullPrice, discount, discountedAmount, finalAmount, percentageProportion)
}