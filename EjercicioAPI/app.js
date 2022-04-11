window.addEventListener("load", () =>{
    //let longitud
    //let latitud

    //const ciudad = document.getElementById("ciudad");
    //const formulario = document.getElementById("formulario")

    const temperaturaValor = document.getElementById("temperatura-valor");
    const temperaturaDescripcion = document.getElementById("temperatura-descripcion");

    const ubicacion = document.getElementById("ubicacion");
    const iconoTiempo = document.getElementById("iconoTiempo");

    const velocidadViento = document.getElementById("velocidadViento");

     /*const api = {
        clave: "e9ca141b3cdfec30cb5e1a1773d2e0a5",
        url: "https://api.openweathermap.org/data/2.5/weather"
    }

    async function buscar(query) {
        try {
            const response = await fetch (`${api.url}?q=${query}&appid=${api.clave}&lang=es`);
            const data = await response.json();
            console.log(data)
        } catch (error) {
            alert ("Hubo un error");
        }
    }

   function buscarCiudad (evento) {
        evento.preventDefault();
    }*/

    //formulario.addEventListener("submit", buscarCiudad, true);
    

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition( posicion =>{
                //longitud = posicion.coords.longitude
                //latitud = posicion.coords.latitude

                //const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&exclude={part}&appid=e9ca141b3cdfec30cb5e1a1773d2e0a5`;
                const url = `https://api.openweathermap.org/data/2.5/weather?q=barcelona&lang=es&units=metric&appid=e9ca141b3cdfec30cb5e1a1773d2e0a5`;

               fetch(url)
                    .then (Response => {return Response.json() })
                    .then (datos => {

                        let temperatura = Math.round (datos.main.temp)
                        temperaturaValor.textContent = `${temperatura} ºC` 

                        let descripcion = datos.weather[0].description
                        temperaturaDescripcion.textContent = descripcion.toUpperCase()

                        ubicacion.textContent = datos.name

                        velocidadViento.textContent = `${datos.wind.speed} m/s`

                        console.log(datos.weather[0].main)

                        switch (datos.weather[0].main) {
                            case "Clouds":
                                iconoTiempo.src = "iconosAnimados/animated/cloudy-day-2.svg"
                                console.log("Nublado")
                                break;
                            case "Thunderstorm":
                                iconoTiempo.src = "iconosAnimados/animated/thunder.svg"
                                console.log("Tormenta")
                                break;
                            case "Drizzle":
                                iconoTiempo.src = "iconosAnimados/animated/rainy-2.svg"
                                console.log("Llovizna")
                                break;
                            case "Rain":
                                iconoTiempo.src = "iconosAnimados/animated/rainy-7.svg"
                                console.log("Lluvia")
                                break;
                            case "Snow":
                                iconoTiempo.src = "iconosAnimados/animated/snowy-3.svg"
                                console.log("Nieve")
                                break;
                            case "Atmosphere":
                                iconoTiempo.src = "iconosAnimados/animated/weather.svg"
                                console.log("Atmosfera")
                                break;
                            case "Clear":
                                iconoTiempo.src = "iconosAnimados/animated/day.svg"
                                console.log("Despejado")
                                break;
                                
                        
                            default:
                                break;
                        }


                    })
                    .catch (error => {
                        console.log(error)
                    }) 
        })
       
    }
})