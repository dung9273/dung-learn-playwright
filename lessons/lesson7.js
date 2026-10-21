for (var i=0; i<5; i++){
    console.log("Hello Jun" + i)
}


var cars = ["vol", "toy", "tesla"]
for ( var c of cars){
    console.log(c)
    if (c == "toy"){
        break
    }
}