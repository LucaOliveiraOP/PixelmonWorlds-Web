export function ButtonContent({ onClick, className, children, disabled = false, ...props }) {
    return (
        <button onClick={onClick} disabled={disabled} className={className} {...props}> {children} </button>
    )
}