const clientes = require ("./db.json");

function filtrarAptoSemComplemento (lista) {
    return lista.filter((cliente) => {
        return (cliente.endereco.apartamento && !cliente.endereco.hasOwnProperty("complemento"))
    })
}

const clientesApto = filtrarAptoSemComplemento(clientes);

console.log(clientesApto);