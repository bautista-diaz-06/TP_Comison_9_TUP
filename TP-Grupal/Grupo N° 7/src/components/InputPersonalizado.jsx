// src/components/InputPersonalizado.jsx
export default function InputPersonalizado({ label, type = "text", value, onChange }) {
  return (
    <div className="mb-4">
      <label className="block mb-1">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="border rounded px-3 py-2 w-full"
      />
    </div>
  );
}
