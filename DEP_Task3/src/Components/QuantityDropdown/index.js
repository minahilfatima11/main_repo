import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import Button from '@mui/material/Button'; 
import { useState } from "react";


const QuantityDropdown = () => {

    const [inputVal, setInputVal] = useState(1);

    const minus = () => {
        if (inputVal > 1) {
            setInputVal(inputVal - 1);
        }
    }

    const plus = () => {
        setInputVal(inputVal + 1);
    }

    const handleChange = (event) => {
        const value = parseInt(event.target.value);
        if (!isNaN(value) && value > 0) {
            setInputVal(value);
        }
    }

    return (
        <div className="quantityDropdown d-flex align-items-center">
            <Button onClick={minus}><FaMinus /></Button>
            <input 
                type="text" 
                value={inputVal} 
                onChange={handleChange} 
            />
            <Button onClick={plus}><FaPlus /></Button>
        </div>
    )
}

export default QuantityDropdown;
