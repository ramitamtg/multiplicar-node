//Requireds

const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {

    console.log("----------------------".green);
    console.log(`Tabla del ${base}`.green);
    console.log("----------------------".green);


    for (let i = 0; i <= limite; i++) {
        let resultado = base * i;
        console.log(`${base} * ${i} = ${resultado}`)
    }

}

/* 

Hacer que la base se multiplique por el limite que yo quiero


*/



let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {
        let data = "";

        if (!Number(base)) {
            reject("Pone un numero tarado")
            return
        }

        for (let i = 0; i <= limite; i++) {
            let resultado = base * i;
            data += `${base} * ${i} = ${resultado}\n`
        }


        fs.writeFile(`tablas/tabla-${base}-con-limite-en-${limite}.txt`, data, (err) => {

            if (err)
                reject(err);
            else
                resolve(`tabla-${base}-limite-${limite}.txt`.green);
        });


    })
}

module.exports = {
    crearArchivo,
    listarTabla
}