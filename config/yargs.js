const opcines = {
    base: {
        demand: true,
        alias: "b"
    },
    limite: {
        alias: "l",
        default: 10
    }
}

const argv = require("yargs")
    .command("listar", "Imprime en consola la tabla de multiplicar", opcines)
    .command("crear", "Crea la tabla de multiplicar", opcines)
    .help()
    .argv;


module.exports = {
    argv
}