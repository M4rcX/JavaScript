

class holaMundo extends HTMLElement{
    constructor(){
        super();
        this.nombre;
        this.apellido;
    }

    static get observedAttributes(){
        return ['nombre', "apellido"];
    }

    attributeChangedCallback(nombreAttr, oldValue, newValue){
        switch(nombreAttr){
            case "nombre":
                this.nombre = newValue;
            break;
            case "apellido":
                this.apellido = newValue;
            break;
        }
    }

    connectedCallback(){
        this.innerHTML =  `
        <div>
        <h1>Hola ${this.nombre} ${this.apellido}</h1>
        <p>Primer parrafo: Lorem ipsum dolor sit amet consectetur adipiscing elit dapibus, turpis ornare congue vitae ultrices varius. Eu nisi morbi pulvinar dictum nam dui inceptos sociosqu aliquet convallis, id commodo torquent non semper lobortis lacinia mauris faucibus tortor interdum, libero montes ad ornare at urna accumsan scelerisque vivamus. Penatibus tortor auctor pellentesque mus curae tellus sollicitudin quam primis varius tempor ridiculus, donec aliquet nisl suscipit in turpis ut senectus proin mattis rhoncus.

        Natoque hac lectus mus nisi luctus neque class nullam tristique dignissim vitae augue rutrum porta maecenas per, nascetur risus cras posuere fringilla lacinia diam lobortis gravida phasellus accumsan ullamcorper ridiculus feugiat. Metus tempor egestas porta varius nostra parturient justo, facilisis dapibus arcu tortor eget eros risus, phasellus mollis lacus volutpat porttitor proin. Maecenas nam lobortis fusce curae sagittis vestibulum, auctor fames porttitor nullam.
        </div>`;
        this.style.color = "green";
        this.style.fontFamily = "sans-serif";
    }
}

window.customElements.define("hola-mundo", holaMundo);