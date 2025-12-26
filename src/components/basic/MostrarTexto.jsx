import { useState } from "react";

export const MostrarTexto = () => {
  const [visible, setVisible] = useState(true);
  return (
    <div className="flex items-center justify-center min-h-screen flex-col gap-2">
      {visible && <p className="text-4xl font-bold">Hola Mundo 👋🏼</p>}
      <button
        className="py-2 px-2 cursor-pointer border border-white bg-green-400 transition rounded-md"
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "Ocultar" : "Mostrar"}
      </button>
    </div>
  );
};
