//Componente de lista de usuarios, recibe props para manejar la edición y eliminación de usuarios
export const UserList = ({ users, onEdit, onDelete }) => {
  if (users.length === 0) {
    return (
      <p>
        There are no registered users <i className="bi bi-book"></i>
      </p>
    );
  }

  //Ejercicio: convertir la lista en una tabla
  return (
    <table className="w-full">
      <thead>
        <tr className="bg-slate-700">
          <th className="border border-slate-700 p-2 font-medium">Name</th>
          <th className="border border-slate-700 p-2 font-medium">Email</th>
          <th className="border border-slate-700 p-2 font-medium">Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td className="border border-slate-700 p-2">{user.name}</td>
            <td className="border border-slate-700 p-2">{user.email}</td>
            <td className="border border-slate-700 p-2">
              <button
                onClick={() => onEdit(user)}
                className="text-blue-400 hover:text-blue-500 cursor-pointer mr-2"
              >
                <i className="bi bi-pencil-square text-lg"></i>
              </button>
              <button
                onClick={() => onDelete(user.id)}
                className="text-red-400 hover:text-red-500 cursor-pointer"
              >
                <i className="bi bi-trash text-lg"></i>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
