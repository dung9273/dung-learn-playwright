var fs = 10
var distance = 100

function recomendedCar( familySize, plannedDistanceToDrive){
    if (familySize <=4 && plannedDistanceToDrive < 200 ){
        console.log("Tesla")
    } else if (familySize <=4 && plannedDistanceToDrive >= 200){
        console.log("Toyota Camry")
    } else if (familySize > 4){
        console.log("Minivan")
    }
    
}

recomendedCar(fs, distance)