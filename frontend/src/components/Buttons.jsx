function Btn({onClick, className = '', children, id}) {
    return (
        <a href={`#${id}`}>
        <button
            onClick={onClick}
            className={`custom-btn ${className}`}
        >
            {children}
        </button>
        </a>
    );
}


export default Btn;