export default function Card({ children, className, onClick = () => {} }) {
  return (
    <button
      className={`relative overflow-hidden rounded-lg shadow-lg transition duration-300 ease-out hover:scale-105 active:scale-100 md:hover:scale-110 ${className}`}
      onClick={onClick}
    >
      {children}
      <div className="absolute inset-0 rounded-lg bg-black/20 hover:bg-black/5" />
    </button>
  );
}
