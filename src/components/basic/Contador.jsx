import { useState } from "react";

export const Contador = () => {
  const [count, setCount] = useState(0);

  const incrementar = () => {
    setCount(count + 1);
  };
  const reiniciar = () => {
    setCount(0);
  };
  const decrementar = () => {
    count > 0 && setCount(count - 1);
  };
  return (
    <div className="flex items-center justify-center min-h-screen flex-col gap-3">
      <h1 className="text-4xl font-bold">{count}</h1>
      <section className="flex gap-2">
        <button
          onClick={decrementar}
          className="px-4 py-2 bg-red-500 hover:bg-red-600 cursor-pointer transition"
        >
          Decrementar
        </button>
        <button
          onClick={reiniciar}
          className="px-4 py-2 bg-slate-500 hover:bg-slate-600 cursor-pointer transition"
        >
          Reiniciar
        </button>
        <button
          onClick={incrementar}
          className="px-4 py-2 bg-green-500 hover:bg-green-600 cursor-pointer transition"
        >
          Incrementar
        </button>
      </section>
    </div>
  );
};
