export function InputLabel( { id, text, className} ) {
    return (
        <label htmlFor={id} className={className}>{text}</label>
    )
}