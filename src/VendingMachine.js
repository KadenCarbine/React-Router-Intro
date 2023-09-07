import React from "react";
import { Link } from "react-router-dom";
import './VendingMachine.css'

const VendingMachine = () => {
return (
    <>
        <h3>
        <Link to="/chips">Chips</Link>
        </h3>
        <h3>
            <Link to="/water">Water</Link>
        </h3>
        <h3>
        <Link to="/soda">Soda</Link>
    </h3>
    </>
)
}

export default VendingMachine