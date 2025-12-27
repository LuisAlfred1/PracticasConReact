//Componente de lista de usuarios, recibe props para manejar la edición y eliminación de usuarios
export const UserList = ({ users, onEdit, onDelete }) => {
  if (users.length === 0) {
    return (
      <p>
        There are no registered users <i className="bi bi-book"></i>
      </p>
    );
  }
  return (
    <ul>
      {users.map((user) => (
        <li
          key={user.id}
          className="flex justify-between items-center border p-3 mb-2"
        >
          <span>
            {user.name} - {user.email}
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => onEdit(user)}
              className="text-blue-400 hover:text-blue-500 cursor-pointer"
            >
              Edit <i className="bi bi-pencil-square"></i>
            </button>
            <button
              onClick={() => onDelete(user.id)}
              className="text-red-400 hover:text-red-500 cursor-pointer"
            >
              Delete <i className="bi bi-trash"></i>
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};
