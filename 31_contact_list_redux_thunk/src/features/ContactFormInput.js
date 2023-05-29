export default function ContactFormInput ({ type, placeholder, value, onChange }) {
    return (
        <input type={type}
                placeholder={placeholder} 
                value={value} 
                onChange={onChange}/>
    )
}