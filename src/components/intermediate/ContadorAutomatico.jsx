import { useEffect, useState } from "react";

export const ContadorAutomatico = () => {
  const [contador, setContador] = useState(0);
  const [activo, setActivo] = useState(true);

  useEffect(() => {
    if (!activo) return;

    const intervalo = setInterval(() => {
      setContador((prev) => prev + 1);
    }, 1000);

    //clearInterval detiene el intervalo anterior.
    return () => clearInterval(intervalo);
  }, [activo]);

  return (
    <div className="flex justify-center items-center min-h-screen flex-col gap-4">
      <h1 className="text-4xl font-bold">{contador}</h1>
      <div className="flex gap-2">
        <button
          onClick={() => setActivo(false)}
          className={`transition px-4 py-2 rounded-md ${
            activo
              ? "bg-red-500 hover:bg-red-600 cursor-pointer"
              : "bg-red-300 opacity-50 cursor-not-allowed"
          }`}
          disabled={!activo}
        >
          Detener
        </button>
        <button
          onClick={() => setActivo(true)}
          className={`transition px-4 py-2 rounded-md ${
            !activo
              ? "bg-green-500 hover:bg-green-600 cursor-pointer"
              : "bg-green-300 opacity-50 cursor-not-allowed"
          }`}
          disabled={activo}
        >
          Continuar
        </button>
        {/*Se creó el componente "Boton" dentro de la carpeta components/ui pasandole dos props: texto y onClick*/}
      </div>
    </div>
  );
};
