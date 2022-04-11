botonNumero.forEach(boton => {
    boton.addEventListener("click", () => {
        calculadora.tipoNumero(boton.innerText)
        calculadora.imprimirDisplay()
    })
})

botonBorrar.addEventListener("click", () => {
    calculadora.borrar()
    calculadora.imprimirDisplay()
})

botonborrarTodo.addEventListener("click", () => {
    calculadora.borrarTodo()
    calculadora.imprimirDisplay()
})

botonOperador.forEach(boton => {
    boton.addEventListener("click", () => {
        calculadora.tipoOperación(boton.innerText)
        calculadora.imprimirDisplay()
    })
})

botonIgual.addEventListener("click", () => {
    calculadora.realizarCalculo()
    calculadora.imprimirDisplay()
})