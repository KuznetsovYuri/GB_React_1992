import { Msg } from "./components/func/Message";
import { useState } from "react";
import style from "./components/func/Form.module.css";

export const App = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <button className={style.btn} onClick={() => setToggle(!toggle)}>
        {toggle ? "hide text" : "show text"}
      </button>
      {toggle && <Msg text="It was sunny today" />}
    </>
  );
};
