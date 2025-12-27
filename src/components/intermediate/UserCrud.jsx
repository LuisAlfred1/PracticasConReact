import { useState } from "react";

//No utilizar el index por defecto
export const UserCrud = () => {
  

  //El contenedor principal se divide en dos partes, el lado izquierdo es el formulario y el lado derecho es la lista de usuarios
  //Utilizamos flex-row para que en pantallas grandes se vean lado a lado y flex-col para que en pantallas pequeñas se vean uno encima del otro

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/*Lado izquierdo */}
      <aside className="p-8 w-full md:w-1/3 lg:w-1/4 bg-slate-700 border-r-2 border-slate-400">
        <h1 className="text-2xl font-semibold mb-6">Form</h1>
      </aside>
      {/*Lado derecho */}
      <div className="flex-1 relative">
        <main className="p-8 overflow-y-auto h-full">
          <h1 className="text-2xl font-semibold mb-6">
            {" "}
            <i className="bi bi-people-fill"></i> User CRUD
          </h1>
          <div className="mt-2"></div>
        </main>
      </div>
    </div>
  );
};
