const botonNumero = document.querySelectorAll("[numero]");
const botonOperador = document.querySelectorAll("[operador]");
const botonIgual = document.querySelector("[igual]");
const botonborrarTodo = document.querySelector("[borrarTodo]");
const botonBorrar = document.querySelector("[borrar]");
const textoPantallaSuperior = document.querySelector("[pantallaSuperior]");
const textoPantallaInferior = document.querySelector("[pantallaInferior]");

class Calculadora{
    constructor(textoPantallaInferior, textoPantallaSuperior){
        this.textoPantallaInferior = textoPantallaInferior
        this.textoPantallaSuperior = textoPantallaSuperior
        this.pantallaInferior = ""
        this.pantallaSuperior = ""
        this.operador= undefined
    }
    tipoNumero(numero){
        if (numero === "." && this.pantallaInferior.includes(".")) return
        this.pantallaInferior = this.pantallaInferior + numero
    }
    imprimirDisplay() {
        this.textoPantallaInferior.innerText = this.pantallaInferior
        this.textoPantallaSuperior.innerText = this.pantallaSuperior
    }
    borrar(){
        this.pantallaInferior = this.pantallaInferior.slice(0,-1)
    }
    tipoOperación(operador){
        if(this.pantallaInferior =="") return
        if(this.pantallaSuperior !="") {
            this.realizarCalculo()
        }
        this.operador = operador
        this.pantallaSuperior = this.pantallaInferior
        this.pantallaInferior=""
    }
    realizarCalculo(){
        let resultado
        let numero1 = parseFloat(this.pantallaSuperior)
        let numero2 = parseFloat(this.pantallaInferior)
        if(isNaN(numero1) || isNaN(numero2))return
    
        switch (this.operador) {
            case "+":
                resultado = numero1 + numero2
                break;
            case "-":
                resultado = numero1 - numero2
                break;
            case "*":
                    resultado = numero1 * numero2
                    break;
            case "/":
                resultado = numero1 / numero2
                break;
            default: return
        }

        this.pantallaInferior = resultado
        this.operador = undefined
        this.pantallaSuperior = ""
    }

    borrarTodo(){
        this.pantallaInferior=""
        this.pantallaSuperior=""
        this.operador = undefined
    }
}

const calculadora = new Calculadora(textoPantallaInferior,textoPantallaSuperior);
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

