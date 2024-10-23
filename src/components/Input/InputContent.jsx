export function InputContent( { icon, id, type, placeholder, disabled = false, className, ...props } ) {
    return (
        <div className='relative'>
            {icon}
            <input
                id={id}
                name={id}
                type={type}
                placeholder={placeholder}
                disabled={disabled}
                className={className}
                {...props}
            />
        </div>
    )
}