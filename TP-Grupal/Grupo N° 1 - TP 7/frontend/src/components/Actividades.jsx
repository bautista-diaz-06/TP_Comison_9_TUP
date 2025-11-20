import React, { useState, useEffect } from "react";
import ActividadForm from "./ActividadForm";
import ActividadesList from "./ActividadesList";

import {
  fetchActividades as fetchActividadesApi,
  createActividad as createActividadApi,
  updateActividad as updateActividadApi,
  deleteActividad as deleteActividadApi
} from "../services/actividades";

function Actividades() {
  const [actividades, setActividades] = useState([]);
  const [actividadToEdit, setActividadToEdit] = useState(null);

  useEffect(() => {
    fetchActividadesApi()
      .then(setActividades)
      .catch(err => console.error("Error cargando actividades:", err));
  }, []);

  const addActividad = async (data) => {
    const newActividad = await createActividadApi(data);
    setActividades(prev => [...prev, newActividad]);
  };

  const updateActividad = async (id, data) => {
    const actividadActualizada = await updateActividadApi(id, data);
    setActividades(prev =>
      prev.map(a => a.id === id ? actividadActualizada : a)
    );
    setActividadToEdit(null);
  };

  const deleteActividad = async (id) => {
    await deleteActividadApi(id);
    setActividades(prev => prev.filter(a => a.id !== id));
  };

  return (
    <div>
      <ActividadForm
        onAddActividad={addActividad}
        onUpdateActividad={updateActividad}
        actividadToEdit={actividadToEdit}
        onCancelEdit={() => setActividadToEdit(null)}
      />

      <ActividadesList
        actividades={actividades}
        onEditActividad={setActividadToEdit}
        onDeleteActividad={deleteActividad}
      />
    </div>
  );
}

export default Actividades;

