import { useState } from "react";

export const Filtro = () => {
  const [busqueda, setBusqueda] = useState("");
  const users = [
    { id: 1, name: "Lilly Bainbridge" },
    { id: 2, name: "Luis Reyes" },
    { id: 3, name: "Marge Truman" },
    { id: 4, name: "Matilda Lawler" },
    { id: 5, name: "Alicia Toronto" },
  ];

  const filtrados = users.filter((user) =>
    //trim() lo utilizo para evitar busquedas vacías
    user.name.toLowerCase().includes(busqueda.trim().toLowerCase())
  );
  return (
    <div className="m-8">
      <h1 className="text-2xl font-bold">Busqueda de usuarios</h1>
      <input
        type="text"
        placeholder="Introduce el nombre..."
        value={busqueda}
        className="px-2 py-2 mt-3 border-2 border-gray-400 outline-none w-72"
        onChange={(e) => setBusqueda(e.target.value)}
      />
      <section className="mt-3">
        {filtrados.length > 0 ? (
          <ul>
            {filtrados.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        ) : (
          busqueda && <p>No se encontraron coincidencias</p>
        )}
      </section>
    </div>
  );
};
