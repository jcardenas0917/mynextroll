import React from "react";
import "./style.css";

export function Input(props) {
    return (
        <div className="form-group">
            <input className="form-control" {...props} />
        </div>
    )
}
// export function Select(props) {
//     return (
//         <div className="form-group">
//             <select className="form-control" {...props}>
//                 <option>1</option>
//                 <option>2</option>
//                 <option>3</option>
//                 <option>4</option>
//             </select>
//         </div>
//     )
// }
// export function Belts(props) {
//     return (
//         <div className="form-group">
//             <select className="form-control" {...props}>
//                 <option>White</option>
//                 <option>Green</option>
//                 <option>Blue</option>
//                 <option>Purple</option>
//                 <option>Brown</option>
//                 <option>Black</option>
//             </select>
//         </div>
//     )
// }
export function FormBtn(props) {
    return (
        <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">Submit
            {props.children}
        </button>
    );
}

