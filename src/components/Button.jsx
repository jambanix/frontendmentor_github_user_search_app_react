
export const Button = ({children, className}) => {
    return (
        <button className={`rounded-lg ${className}}`}>{children}</button>
    )
}