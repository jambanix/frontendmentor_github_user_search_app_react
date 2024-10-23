export const Button = ({ children, className, onClick }) => {
  return (
    <button className={`rounded-lg ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};
