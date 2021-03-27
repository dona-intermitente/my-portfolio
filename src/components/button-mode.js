import React, { useEffect, useState } from "react";

export default function ButtonMode() {
    const [checked, setChecked] = useState(
        localStorage.getItem("class") === "light" ? false : true
      );
    useEffect(() => {
        document
          .getElementsByTagName("BODY")[0]
          .setAttribute("class", localStorage.getItem("class"));
      }, [checked]);
    const toggleThemeChange = () => {
        if (checked === true) {
          localStorage.setItem("class", "light");
          setChecked(false);
        } else {
          localStorage.setItem("class", "dark");
          setChecked(true);
        }
    };
    console.log(checked)
    return (
        <label className={"switch"}>
            <input type="checkbox"
            defaultChecked={checked}
            onChange={() => toggleThemeChange()}
            />
            <span class="slider text-body"></span>
        </label>
    );
}