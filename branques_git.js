var a = parseInt(prompt("Dona'm un numero"));
var temps = (Date.now() % 1000) / 1000;
for (var i=0;i<500000;i++){
    var rand=Math.random()*500000;
    if (a=rand){
        document.write(temps);
        break;
    } else {
        document.write("El numero entrat no és correcte");
        break;
    }
}

