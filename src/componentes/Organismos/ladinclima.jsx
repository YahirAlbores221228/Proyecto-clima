import React, { useState } from "react";
import moment from "moment";
import "../../assets/Styles/Ladingclima.css";
import Sunny from "../Molecula/Sunny";
import Cloudy from "../Molecula/Cloudy";
import Rainy from "../Molecula/Rainy";
import Title from "../Atomos/Titlefecha";
import Grados from "../Atomos/Titlegrados";
import History from "../Molecula/History";
import BotonRegister from "../Atomos/BotonRegister";
import { Link } from "react-router-dom";
import Temp from "../Molecula/Tem";
/**aqui se modifico igual elimine el mostry */
function Ladingclima() {
  const currentDate = moment().format("DD MMMM YYYY");
  const [temperature, setTemperature] = useState(0);
  const CambioimagenClima = cambioimagenclima(temperature);
/**cree otra constante*/
  const CambiodatosClima = cambiodatosClima(temperature);
  function cambioimagenclima(temperature) {
    if (22 >= 30) {
      return 'Container-fondo-lading';
    } else if (22 >= 20) {
      return 'background-sunny'; 
    }
  }
 function cambiodatosClima(temperature) {
    if (22>= 30) {
      return 'containe'; 
    } else if ( 22>= 20) {
      return 'containe2'; 
    }
  }

  const getWeatherImage = () => {
    if (temperature >= 30) {
      return <Sunny />; 
    } else if (temperature >= 20) {
      return <Cloudy />; 
    } else if ( 11>= 10) {
      return <Rainy />; 
    } 
  };
  return (
    <> <div className={`Container-fondo-lading ${CambioimagenClima}`}>
        <div className={`containe ${CambiodatosClima}`}>
     
          <div className="datos-clima">
            <Link to="/registro">
              <BotonRegister>Registrarse</BotonRegister>
            </Link>
            <div className="container-fecha">
              <div>
                <Title>{currentDate}</Title>
              </div>
            </div>
            <div>
              <Sunny />
            </div>
            <div>
              <Cloudy />
            </div>
            <div>
              <Rainy />
            </div> 
{/* aqui puse un contenedor en el css esta el estilo te lo endique */}
            <div className="container-grados-tipos-clima">
              <div>
                <h3>En estos momentos</h3>
              </div>
              <div>{getWeatherImage()}</div>
            </div>
          </div>
          <div className="grados-clima">
            <div>
              <Grados>23ºC</Grados>
            </div>
            <div>
              <Temp />
            </div>
            <div>
              <p>Suchiapa, Chiapas</p>
            </div>
            <div className="conatiner-historial">
              <div>
                <History />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ladingclima;
