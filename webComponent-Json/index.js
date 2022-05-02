
class InformacionProyecto extends HTMLElement{
        constructor(){
            super();
        }

        connectedCallback(){
        let shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.innerHTML = `
        <style>
        .informacionProyecto {
            font-family: sans-serif;
            background: #f4f6f7;
            width: 400px;
            height:100px
            display: grid;
            grid-template-columns: 1fr;
            margin-bottom: 10px;
        }
        .btn-container {
            border: 2px solid var(--red);
            padding: var(--space);
            text-align: center;
          }
          .btn {
            border: 
            border-radius: 5px;
            color: black;
            
           
            text-transform: uppercase;
          }
          .btn:hover{
              background-color: green;
          }
          .btn:active{
              background-color:black;
              color: white;
          }
    </style>
    <div class="informacionProyecto">
        <div class="table">
            <h3></h3>
            <table border="1">
            <thead>
                <tr>
                    <th>Codigo proyecto</th>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Codigo Cliente</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
            <tr>
                <td id="valorCodigoProyecto">x</td>
                <td id="valorNombre">x</td>
                <td id="valorDescripcion">x</td>
                <td id="valorCodigoCliente">x</td>
            </tr>
            </table>
        </div>
    
    <div class="btn-container">
        <button class="btn">Mostrar datos</button>
    </div>
    
    </div>
    `;
        }
    }

window.customElements.define("informacion-proyecto",InformacionProyecto);

window.addEventListener("load",() =>{

    const boton = document.getElementsByClassName("btn");
    const valorCodigoProyecto = document.getElementById("valorCodigoProyecto");
    const valorNombre = document.getElementById("valorNombre");
    const valorDescripcion = document.getElementById("valorDescripcion");
    const valorCodigoCliente = document.getElementById("valorCodigoCliente");

    boton.addEventListener("click", function(){
        fetch("datos.json")
            .then (response => {return response.json()})
            .then (datos =>{

                let codigoProyecto = datos.CodigoProyecto;
                valorCodigoProyecto.textContent = codigoProyecto;

                let nombre = datos.Nombre;
                valorNombre.textContent =nombre;

                let descripcion = datos.Descripcion;
                valorDescripcion.textContent = descripcion;

                let codigoCliente = datos.CodigoCliente;
                valorCodigoCliente.textContent = codigoCliente;

            })
    })
})



