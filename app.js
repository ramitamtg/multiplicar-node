const argv = require("./config/yargs").argv;
const colors = require('colors');


const { crearArchivo } = require("./multiplicar/multiplicar")
const { listarTabla } = require("./multiplicar/multiplicar")

let comando = argv._[0];

switch (comando) {
    case "listar":
        listarTabla(argv.base, argv.limite)
        break;
    case "crear":
        console.log("crear");
        crearArchivo(argv.base, argv.limite)
            .then((archivo) => console.log(`Archivo creado ${archivo}`))
            .catch(e => console.log(e))

        break;

    default:
        console.log("Comando no reconocido");
        break;
}