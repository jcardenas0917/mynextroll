import React from "react";

const Modal = props => (
    <div>
        <header>{props.title}</header>

        <section className="modal-main">
            {props.children}
        </section>
        <section className="modal-main">
            <button>Cancel</button>
            <button>Confirm</button>
        </section>
    </div>
);
export default Modal;
