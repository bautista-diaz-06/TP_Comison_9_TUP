import React, { useState, useEffect } from "react";
import SocioForm from "./SocioForm";
import SociosList from "./SocioList";
import { fetchSocios as fetchSociosApi, createSocio as createSocioApi, updateSocio as updateSocioApi, deleteSocio as deleteSocioApi } from "../services/socios";

function Socios() {
  const [socios, setSocios] = useState([]);
  const [socioToEdit, setSocioToEdit] = useState(null);

  // Cargar socios desde la base de datos al montar el componente
  useEffect(() => {
    fetchSociosApi()
      .then(setSocios)
      .catch(err => console.error("Error al cargar socios:", err));
  }, []);

 const addSocio = async (newSocio) => {
  try {
    const { id } = await createSocioApi(newSocio);
    setSocios([...socios, { ...newSocio, id }]);
  } catch (err) {
    console.error("Error creando socio:", err);
  }
};

  const updateSocio = async (updated) => {
    try {
      await updateSocioApi(updated.id, updated);
      setSocios(socios.map(s => (s.id === updated.id ? updated : s)));
      setSocioToEdit(null);
    } catch (err) {
      console.error("Error actualizando socio:", err);
    }
  };

  const deleteSocio = async (id) => {
    try {
      await deleteSocioApi(id);
      setSocios(socios.filter(s => s.id !== id));
    } catch (err) {
      console.error("Error eliminando socio:", err);
    }
  };

  const handleEdit = (socio) => setSocioToEdit(socio);
  const handleCancelEdit = () => setSocioToEdit(null);

  return (
    <div className="page-container">
      <h2>Gestión de Socios</h2>
      <SocioForm
        onAddSocio={addSocio}
        onUpdateSocio={updateSocio}
        socioToEdit={socioToEdit}
        onCancelEdit={handleCancelEdit}
      />
      <SociosList
        socios={socios}
        onDeleteSocio={deleteSocio}
        onEditSocio={handleEdit}
      />
    </div>
  );
}

export default Socios;
