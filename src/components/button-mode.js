import React, { useEffect, useState } from "react";

export default function ButtonMode() {
    const [checked, setChecked] = useState(
        localStorage.getItem("class") === "dark" ? true : false
      );
    useEffect(() => {
        document
          .getElementsByTagName("BODY")[0]
          .setAttribute("class", localStorage.getItem("class"));
      }, [checked]);
    const toggleThemeChange = () => {
        if (checked === false) {
          localStorage.setItem("class", "dark");
          setChecked(true);
        } else {
          localStorage.setItem("class", "");
          setChecked(false);
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