import { useState, useEffect } from "react";

export const SimulaciónApi = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setUsers([
        { id: 1, name: "Luis Reyes" },
        { id: 2, name: "Lilly Bainbrigde" },
        { id: 3, name: "Michqi Tozier" },
        { id: 4, name: "Matilda Lawler" },
      ]);
      setIsloading(false);
    }, 1500);
  }, []);

  if (isLoading)
    return (
      <section className="flex items-center justify-center min-h-screen">
        <p className="text-xl">Cargando datos...</p>
      </section>
    );

  return (
    <div className="m-6">
      <h1 className="text-2xl font-bold">Users</h1>
      <ul className="mt-4">
        {users.map((items) => (
          <li key={items.id}>{items.name}</li>
        ))}
      </ul>
    </div>
  );
};
