import React from "react"
import ProptTypes from "prop-types"
function PetShop(props) {
    const {dogs,cats,customers,customerName,onclick,status} = props
    return(
        <div>
            <h1>Dogs: {dogs}</h1>
            <h2>Cats: {cats}</h2>
            <div>
                Quantidade de Clientes: {customers}
            </div>
            <div>
                Nome do cliente: {customerName}
            </div>
            <div>
                <button onClick={onclick}>Iniciar o banho...</button>
            </div>
        </div>
    )
}

PetShop.defaultProps = {
    cats: 0,
    customers:[]
}

PetShop.proptTypes = {
    dogs: ProptTypes.number.isRequired,
    cats: ProptTypes.number,
    customers: ProptTypes.array,
    customerName: ProptTypes.string.isRequired,
    onclick: ProptTypes.func.isRequired,
    status:  ProptTypes.oneOf(['wait','happening'])
}
export default PetShop