//Enunciado: Un input donde escribas tu nombre y se muestre en pantalla.

import { useState } from "react";

export const InputControl = () => {
  const [nombre, setNombre] = useState("");

  const obtenerNombre = (e) => {
    setNombre(e.target.value);
  };

  return (
    <div className="m-6">
      <h1 className="text-xl font-medium">Manejando input controlado</h1>
      <section className="mt-2">
        <div className="max-w-sm border-2 border-black/50 p-6 shadow-lg">
          <label htmlFor="name" className="block">
            Nombre:
          </label>
          <input
            type="text"
            placeholder="Escribelo aquí..."
            className="w-full px-2 outline-none border border-black/50 py-2 mt-1"
            value={nombre}
            onChange={obtenerNombre}
          />
        </div>
      </section>
      <p className="mt-2">{nombre}</p>
    </div>
  );
};
