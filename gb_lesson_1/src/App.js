// import { Form } from "./components/clsses/Form";
// import { Form as FormFunc } from "./components/func/Form";
// import { useState } from "react";

// import './index.css';


// export const App = () => {
//     const [toggle, setToggle] = useState(true)

//     return (
//         <>
//     <Form/>
//     <hr/>
//     <button onClick={() => setToggle(!toggle)}>{toggle ? 'hide' : "show"}</button>
//     {toggle && <FormFunc/>}
//     </>
//     )


//   }

// Отрисовка элементов из массива //////////////////////

// export const App = () => {
//     const [arr, setArr] = useState([1,2,3,4,5,6])

//     return (
//         <>
//     <Form/>
//     <hr/>
//     <ul>
//         {arr.map(item => 
//         <li key={item}>{item}</li>)}
//     </ul>
//     </>
//     )


//   }

///props//////////////////////////////////

// export const App = () => {
//     const [toggle, setToggle] = useState(true)
//     const [arr, setArr] = useState([1, 2, 3, 4, 5, 6])

//     return (
//         <>
//             <Form name="geekbrains" /> {/* передаем пропсом в Form */}
//             <hr />
//             <ul className="header">
//                 {arr.map(item =>
//                     <li key={item}>{item}</li>)}
//             </ul>
//             <hr />
//             <button onClick={() => setToggle(!toggle)}>{toggle ? 'hide' : "show"}</button>
//             {toggle && <FormFunc name="JavaScript" />} {/* передаем пропсом в FormFunc */}
//         </>
//     )


// }

/////////////ДЗ/////////////

import { Msg } from './components/func/Message'
import { useState } from "react";
import style from './components/func/Form.module.css'

export const App = () => {
    const [toggle, setToggle] = useState(false)

    return (
        <>
            <button className={style.btn} onClick={() => setToggle(!toggle)}>{toggle ? 'hide text' : "show text"}</button>
            {toggle && <Msg text="It was sunny today" />}

        </>
    )


}