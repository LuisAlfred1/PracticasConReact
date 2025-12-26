import { useEffect, useState } from "react";

export const TItuloDinamico = () => {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    document.title = `Contador: ${contador}`;
  }, [contador]);
  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-4">
      <h1 className="text-2xl font-bold">
        Cambia el title a traves del contador
      </h1>
      <button
        className="px-4 py-2 bg-green-600 hover:bg-green-700 transition cursor-pointer"
        onClick={() => setContador(contador + 1)}
      >
        Incrementar +1
      </button>
    </div>
  );
};
