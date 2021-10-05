// Utils

function showResult(shape, resultName, result) {
  let resultParagraph = document.getElementById(resultName);
  resultParagraph.innerHTML = shape + " " + resultName + " " + result;
}

function getSideValue(side = "") {
  let squareSize = document.getElementById(side).value;

  squareSize = parseFloat(squareSize)

  if(squareSize > 0){
    return squareSize;
  } else {
    alert(side + " value must be greater than zero");
    return 0;
  }
}

function validateTriangleSizes(sideA, base, sideC) {
  return (sideA + sideC > base) ? true : false
}

// Square Calculations
function squarePerimeter(){
  let squareSize = getSideValue("squareSide");
  let squarePerimeter = squareSize * 4;

  showResult("Square", "SquarePerimeter", squarePerimeter)
}

function squareSurface(){
  let squareSize = getSideValue("squareSide");
  let squareSurface = Math.pow(squareSize, 2);

  showResult("Square", "SquareSurface", squareSurface)
}

function triangleType(sideA, base, sideC){
  if(sideA == sideC && sideA == base ){
    alert("This is a equilateral triangle")
  } else if(sideA == sideC && sideA != base && sideC != base){
    alert("This is a isosceles triangle")
  } else {
    alert("This is a scalene triangle")
  }
}

function trianglePerimeter(){
  let sideA = getSideValue("a")
  let base = getSideValue("b")
  let sideC = getSideValue("c")

  triangleType(sideA, base, sideC)

  if(validateTriangleSizes(sideA, base, sideC)){
    let trianglePerimeter = [sideA, base, sideC].reduce((a, b) => a + b)
    showResult("Triangle", "TrianglePerimeter", trianglePerimeter)
  } else {
    alert("Triangle is invalid. Sizes summ must be greater than base")
  }
}

function triangleSurface(){
  let triangleSizeb = getSideValue("b");
  let high = getSideValue("h");

  if(!high){
    high = calculateTriangleHigh()
    console.log(high)
  } else if(high != calculateTriangleHigh()){
    high = calculateTriangleHigh()
    alert("Provided triangle high is incorrect, the correct value is: " + high)
  }

  let triangleSurface = (triangleSizeb * high) / 2

  showResult("Trigangle", "TriangleSurface", triangleSurface)
}

function calculateTriangleHigh(){
  let sideA = getSideValue("a")
  let base = getSideValue("b")

  // formula (c,a) = Math.sqrt(Math.pow(a,2) + Math.pow(b,2))
  // in this example, the sides a or b represent the hypotenuse
  // so clearing the formula, we can calculate the triangle high
  // h = Math.sqrt(Math.pow(a,2) - Math.pow(b,2))
  // where the base' is the half of the full triangle base
  
  let primeBase = base/2
  return Math.sqrt(Math.pow(sideA,2) - Math.pow(primeBase, 2))
}

// Circle functions
function circlePerimeter(){
  let radius = getSideValue("r")

  let diameter = radius * 2

  let perimeter = diameter * Math.PI

  showResult("Circle", "circlePerimeter", perimeter)
}

function circleSurface(){
  let radius = getSideValue("r")

  let surface = Math.PI * Math.pow(radius, 2)

  showResult("Circle", "circleSurface", surface)
}