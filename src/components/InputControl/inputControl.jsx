import './inputControl.css'
function Input({ label, ...props }) {
    return (
        <>
            <label>{label}</label>
            <input type='text' {...props} />
        </>
    )
}
export default Input;