// logical "AND"
//console.log( true && true)

// logical "OR"
//console.log(false || false)

var ageMoreThan18 = true
var USCitizen = false
var DiverLicense = ageMoreThan18 || USCitizen
console.log (`This Customer is eligible for DL: ${DiverLicense}`)