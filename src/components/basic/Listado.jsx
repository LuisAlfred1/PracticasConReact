export const Listado = () => {
  const users = [
    { id: 1, name: "Luis Reyes" },
    { id: 2, name: "Lilly Bainbridge" },
    { id: 3, name: "Marge Truman" },
    { id: 4, name: "Rich Santos" },
    { id: 5, name: "Dick Halloran" },
  ];
  return (
    <div className="m-6">
      <h1 className="text-xl font-medium">📕 Listado de usuarios</h1>
      <hr className="mt-2" />
      <ul className="mt-2">
        {users.map((items) => (
          <li key={items.id}>{items.name}</li>
        ))}
      </ul>
    </div>
  );
};
