//Input, boton y lista de tareas

import { useState } from "react";

export const Todo = () => {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);

  const agregarTarea = () => {
    if (tarea.trim() === "") return;
    setTareas([...tareas, tarea]);
    setTarea("");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Todo</h1>
      <input
        type="text"
        value={tarea}
        onChange={(e) => setTarea(e.target.value)}
        placeholder="Escriba una tarea..."
        className="mt-4 border border-gray-600 px-2 py-2 focus:outline-none focus:ring focus:ring-green-800"
      />
      <button
        onClick={agregarTarea}
        className="py-2 px-4 bg-green-400 hover:bg-green-500 cursor-pointer transition"
      >
        Agregar
      </button>
      <hr className="mt-4 border-gray-600" />
      <h2 className="mt-1 text-xl font-medium">Lista de tareas:</h2>
      <ul>
        {tareas.map((items, index) => (
          <li key={index}>{items}</li>
        ))}
      </ul>
    </div>
  );
};
