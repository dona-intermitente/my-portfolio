import { useState } from "react";

function Select() {
    function value(e) {
        setRadio(e.target.value)
    }
    const [radio,setRadio] = useState("Desarrollo Wed");
    return (
        <div className="select">
            <a href="#">{radio}</a>
            <form>
                <div>
                    <p>Desarrollo Wed</p>
                    <input type="radio" id="web" name="proyect" value="Desarrollo Wed" onChange={value}/>
                </div>
                <div>
                    <p>App movil</p>
                    <input type="radio" id="app" name="proyect" value="App mobil" onChange={value}/>
                </div>
                <div>
                    <p>Ilustración</p>
                    <input type="radio" id="ilustración" name="proyect" value="Ilustración" onChange={value}/>
                </div>
                <div>
                    <p>Otro</p>
                    <input type="radio" id="otro" name="proyect" value="Otro" onChange={value}/>
                </div>
            </form>
        </div>
    )
}
export default Select;