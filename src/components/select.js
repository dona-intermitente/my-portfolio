import React, { useState } from "react";

function Select() {
    function value(i) {
        setRadio(i.target.value)
    }
    const [radio,setRadio] = useState("Desarrollo Wed");
    return (
        <React.Fragment>
            <input type="button" className="text-title-light button" value={radio}/>
            <form className="select">
                <div>
                    <p>Desarrollo Wed</p>
                    <input type="radio" id="web" name="project" value="Desarrollo Wed" onChange={value}/>
                </div>
                <div>
                    <p>App movil</p>
                    <input type="radio" id="app" name="project" value="App mobil" onChange={value}/>
                </div>
                <div>
                    <p>Ilustración</p>
                    <input type="radio" id="ilustración" name="project" value="Ilustración" onChange={value}/>
                </div>
                <div>
                    <p>Otro</p>
                    <input type="radio" id="otro" name="project" value="Otro" onChange={value}/>
                </div>
            </form>
        </React.Fragment>
    )
}
export default Select;