import React, { useState, useEffect } from "react";
import Input from "./common/Input";
import Button from "./common/Button";
import "../styles/SocioForm.css";
import { createSocio as createSocioApi, updateSocio as updateSocioApi } from "../services/socios";

function SocioForm({ onAddSocio, onUpdateSocio, socioToEdit, onCancelEdit }) {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rol, setRol] = useState("cliente");
  const [error, setError] = useState("");

  useEffect(() => {
    if (socioToEdit) {
      setNombre(socioToEdit.nombre);
      setApellido(socioToEdit.apellido);
      setEmail(socioToEdit.email);
      setRol(socioToEdit.rol);
      setPassword(""); // por seguridad no mostrar password
    } else {
      setNombre("");
      setApellido("");
      setEmail("");
      setRol("cliente");
      setPassword("");
      setError("");
    }
  }, [socioToEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nombre.trim() || !apellido.trim() || !email.trim() || (!socioToEdit && !password.trim())) {
      setError("Todos los campos son obligatorios.");
      return;
    }
    setError("");
    const socioData = { nombre, apellido, email, rol };
    if (!socioToEdit) socioData.password = password; // solo para creación

    try {
      if (socioToEdit) {
        await updateSocioApi(socioToEdit.id, socioData);
        if (onUpdateSocio) onUpdateSocio({ ...socioToEdit, ...socioData });
      } else {
        const newId = await createSocioApi(socioData);
        if (onAddSocio) onAddSocio({ ...socioData, id: newId });
      }
      setNombre("");
      setApellido("");
      setEmail("");
      setPassword("");
      setRol("cliente");
    } catch (err) {
      console.error("Error al guardar socio:", err);
      setError("Error al guardar el socio.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="socio-form-container">
      <h3>{socioToEdit ? "Editar Socio" : "Registrar Nuevo Socio"}</h3>
      {error && <p className="error-message">{error}</p>}
      <Input label="Nombre" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
      <Input label="Apellido" id="apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} required />
      <Input label="Email" id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      {!socioToEdit && (
        <Input label="Password" id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      )}
      <div className="input-group">
        <label htmlFor="rol">Rol:</label>
        <select id="rol" value={rol} onChange={(e) => setRol(e.target.value)} className="input-field">
          <option value="cliente">Cliente</option>
          <option value="admin">Administrador</option>
        </select>
      </div>
      <div className="form-actions">
        <Button type="submit">{socioToEdit ? "Actualizar Socio" : "Agregar Socio"}</Button>
        {socioToEdit && <Button type="button" onClick={onCancelEdit} className="btn-secondary">Cancelar Edición</Button>}
      </div>
    </form>
  );
}

export default SocioForm;
