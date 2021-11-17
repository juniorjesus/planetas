let nombrePlanetas = Array ('Tierra', 'Marte');
let distancia = [6, 3, '67'];
const tamaño = [];

console.log(nombrePlanetas)
console.log(distancia)
console.log(tamaño)

let i= 0;
while (i <= nombrePlanetas.lenght - 1 ) {
    console.log(i)
    console.log(nombrePlanetas[i]);
    i=i + 1
}

for (let index = 0; index < nombrePlanetas.length; index++){
    console.log(nombrePlanetas[index]);
}

for (const key in Object){
    if (Object.hasOwnProperty.call(Object, key)){
        const element = Object[key];
    }
}

for (const key in nombrePlanetas){
    console.log(nombrePlanetas[key])
}

for (const iterator of object ){

}

//Recorrer planeta
for (const planeta of nombrePlanetas){
    console.log(planeta)
}
for (const key in distancia ){

    if (distancia[key]=='5') {
        console.log('Se encontro la distancia')
    }else {
        console.log('no se encontro la distancia')
    }
}

for (const key in distancia ){
    if (distancia[key]=='5'){
        console.log('Se encontro la distancia')
    }else{
        console.log('No se encontro la distancia')
    }
}



