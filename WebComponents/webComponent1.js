class BotonCompra extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        let shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = `
    <style>
    :host {
      --red: #FF0000;
      --space: 1.5em;
    }
    .btn-container {
      border: 2px solid var(--red);
      padding: var(--space);
      text-align: center;
    }
    .btn {
      background-color: var(--red);
      border: 0;
      border-radius: 5px;
      color: white;
      padding: var(--space);
      text-transform: uppercase;
    }
    .btn:hover{
        background-color: green;
    }
    .btn:active{
        background-color:black;
    }
  </style>
      <div class="btn-container">
        <button class="btn">Comprar Ahora</button>
      </div>
    `;
    }
}

window.customElements.define('boton-compra', BotonCompra);

