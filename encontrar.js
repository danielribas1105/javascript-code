const clientes = require("./db.json");

function lookingFor (lista, chave, valor) {
    return lista.find((item) => item[chave].includes(valor));
}

const encontrado = lookingFor(clientes, "nome", "Dorothea");

const encontrado2 = lookingFor(clientes, "telefone", "9291767581")

console.log(encontrado);
console.log(encontrado2);