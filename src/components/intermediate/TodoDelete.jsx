import { useState } from "react";

export const TodoDelete = () => {
  const [tareas, setTareas] = useState([
    { id: 1, task: "Lavar los platos" },
    { id: 2, task: "Terminar el proyecto" },
    { id: 3, task: "Cambiar las llantas" },
    { id: 4, task: "Realizar la tesis" },
  ]);

  const eliminarTarea = (id) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  };

  return (
    <div className="m-8">
      <h1 className="text-2xl font-bold">Lista de tareas</h1>
      <ul className="mt-4">
        {tareas.map((items) => (
          <div key={items.id} className="flex gap-2 mt-3 items-center">
            <li>{items.task}</li>
            <button
              onClick={() => eliminarTarea(items.id)}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 transition text-white cursor-pointer"
            >
              Eliminar
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};
