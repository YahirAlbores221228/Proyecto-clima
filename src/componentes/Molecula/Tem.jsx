import "../../assets/Styles/Ladingclima.css"
import Gradostemp from "../Atomos/Gradostemp";
import Temp from "../Atomos/H1temp";
function Tem() {
    return ( 
<>
<div className="Container-temp">
<div>
<Temp>Humedad: </Temp>
<Gradostemp>12ºC</Gradostemp>
</div>
<div>
<Temp>Precision: </Temp>
<Gradostemp>42ºC</Gradostemp>
</div>
</div>


</>

 );
}

export default Tem;