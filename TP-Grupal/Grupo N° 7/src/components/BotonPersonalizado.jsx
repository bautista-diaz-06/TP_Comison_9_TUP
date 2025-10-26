export default function BotonPersonalizado({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition"
    >
      {children}
    </button>
  );
}
