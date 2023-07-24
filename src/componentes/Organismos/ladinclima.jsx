import React, { useState } from 'react';
import moment from 'moment';
import "../../assets/Styles/Ladingclima.css";
import Sunny from "../Molecula/Sunny";
import Cloudy from '../Molecula/Cloudy';
import Rainy from '../Molecula/Rainy';
import Mostry from '../Molecula/Mostry';
import Title from '../Atomos/Titlefecha';
import Grados from '../Atomos/Titlegrados';
import History from '../Molecula/History';
import BotonRegister from '../Atomos/BotonRegister';
import { Link } from 'react-router-dom';
import Temp from '../Molecula/Tem';

function Ladingclima() {
  const currentDate = moment().format('DD MMMM YYYY');
 const [temperature, setTemperature] = useState(0);
const CambioimagenClima = cambioimagenclima(temperature);

function cambioimagenclima (temperature) {
  if (22>= 30) {
    return 'Container-fondo-lading'; // Clase para clima soleado
  } else if (22 >= 20) {
    return 'background-sunny'; // Clase para clima nublado
  } 
}
  return (
    <>
      <div className={`Container-fondo-lading ${CambioimagenClima}`}>
        <div className="containe">
          <div className="datos-clima">
            <Link to="/registro">
              <BotonRegister>Registrarse</BotonRegister>
            </Link>
            <div><Title>{currentDate}</Title></div>
            <div><Sunny /></div>
            <div><Cloudy /></div>
            <div><Rainy /></div>
            <div><Mostry /></div>
           
          </div>
          <div className="grados-clima">
            <div>
              <Grados>23ºC</Grados>
            </div>
             <div>
             <Temp/>
               </div>

            <div>
              <p>Suchiapa, Chiapas</p>
            </div>
        <div className='conatiner-historial'>
                <div>
                  <History/>
                    </div>
                        </div>
          </div>
        </div>

      </div>

    </>
  );
}

export default Ladingclima;
