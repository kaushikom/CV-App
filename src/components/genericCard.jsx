import { useState } from "react";
import arrowIcon from '../assets/dropdown-icon.png'
function GenericCard({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);
    function handleClick() {
        setIsOpen(!isOpen);
    }
    const className = isOpen ? 'active' : '';
    return (
        <form className='card shadow'>
            <div className="form-heading" onClick={handleClick}>
                <h2>{title}</h2>
                <img src={arrowIcon} alt="" className={className} />
            </div>
            {isOpen && children}
        </form>)
}

export default GenericCard;