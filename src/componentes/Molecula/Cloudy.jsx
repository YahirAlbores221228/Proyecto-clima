import cloudy from "../../assets/Img/Cloud.svg"
import "../../assets/Styles/Sunny.css"
function Cloudy() {
    return ( 
<>
<div className="Container-cloudy">
<div>
<img src={cloudy} alt="" />
</div>
<div>
<h2>Cloudy</h2>
</div>
<div>
<h2>9º</h2>
</div>
</div>
</>
 );
}

export default Cloudy;