window.addEventListener("load", () =>{

    let temperaturaValor = document.getElementById("temperatura-valor");
    let temperaturaDescripcion = document.getElementById("temperatura-descripcion");

    let ubicacion = document.getElementById("ubicacion");
    let iconoTiempo = document.getElementById("iconoTiempo");

    let buscarCiudad = document.getElementById("ciudad");
    let boton = document.getElementById("boton");

    let velocidadViento = document.getElementById("velocidadViento");

    boton.addEventListener("click", function(){
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+buscarCiudad.value+"&lang=es&units=metric&appid=e9ca141b3cdfec30cb5e1a1773d2e0a5";
        fetch(url)
            .then (Response => {return Response.json() })
            .then (datos => {

                let temperatura = Math.round (datos.main.temp);
                temperaturaValor.textContent = `${temperatura} ºC`;

                let descripcion = datos.weather[0].description;
                temperaturaDescripcion.textContent = descripcion.toUpperCase();

                ubicacion.textContent = datos.name;

                velocidadViento.textContent = `${datos.wind.speed} m/s`;
                buscarCiudad.value="";
                
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
                alert("HUBO UN ERROR, CORRIJA LA BÚSQUEDA")
                console.log(error)
            })
        })
        })