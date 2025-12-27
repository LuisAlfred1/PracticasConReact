import { useState } from "react";

//No utilizar el index por defecto
export const UserCrud = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editUserId, setEditUserId] = useState(null);

  //Manejo del submit del formulario
  const handleSubmit = (e) => {
    //Evitar que el formulario se refresque
    e.preventDefault();

    //Si no hay nombre o email, no hacemos nada
    if (!name || !email) return;

    //Verificamos si estamos editando un usuario o agregando uno nuevo, en este caso verificamos si editUserId tiene un valor, si es asi estamos editando un usuario
    if (editUserId) {
      //Editar usuario
      setUsers((prev) =>
        //Aqui hacemos un map para buscar el usuario que queremos editar
        prev.map((user) =>
          //Si el id del usuario es igual al id que estamos editando, actualizamos sus datos y sino devolvemos el usuario tal cual
          user.id === editUserId ? { ...user, name, email } : user
        )
      );
      setEditUserId(null);
    } //Sino, estamos agregando un nuevo usuario
    else {
      //aqui agregamos un nuevo usuario
      const newUser = {
        id: Date.now(),
        name,
        email,
      };

      //Aqui actualizamos el estado de los usuarios agregando el nuevo usuario al array de usuarios
      setUsers((prev) => [...prev, newUser]);
    }

    //Por ultimo limpiamos los campos del formulario
    setName("");
    setEmail("");
  };

  //Aqui manejamos la edicion de un usuario, llenando el formulario con sus datos
  const handleEdit = (user) => {
    //Seteamos el id del usuario que queremos editar
    setEditUserId(user.id);
    //Seteamos los campos del formulario con los datos del usuario que queremos editar
    setName(user.name);
    setEmail(user.email);
  };

  //Aqui manejamos la eliminacion de un usuario, recibiendo su id
  const handleDelete = (userId) => {
    //Filtramos el array de usuarios para eliminar el usuario con el id que recibimos
    setUsers((prev) => prev.filter((user) => user.id !== userId));
  };

  //El contenedor principal se divide en dos partes, el lado izquierdo es el formulario y el lado derecho es la lista de usuarios
  //Utilizamos flex-row para que en pantallas grandes se vean lado a lado y flex-col para que en pantallas pequeñas se vean uno encima del otro

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/*Lado izquierdo */}
      <aside className="p-8 w-full md:w-1/3 lg:w-1/4 bg-slate-700 border-r-2 border-slate-400">
        <h1 className="text-2xl font-semibold mb-6">Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block">
              Name
            </label>
            <input
              type="text"
              value={name}
              placeholder="Please enter your name"
              className="mt-1 w-full outline-none border-2 px-2 py-2 border-slate-400 bg-black/10 backdrop-blur-md"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block">
              Email
            </label>
            <input
              type="email"
              value={email}
              placeholder="example@gmail.com"
              className="mt-1 w-full outline-none border-2 px-2 py-2 border-slate-400 bg-black/10 backdrop-blur-md"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-slate-400 hover:bg-slate-500  text-white py-2 w-full cursor-pointer transition"
          >
            {editUserId ? "Update User" : "Add User"}
          </button>
        </form>
      </aside>
      {/*Lado derecho */}
      <div className="flex-1 relative">
        <main className="p-8 overflow-y-auto h-full">
          <h1 className="text-2xl font-semibold mb-6">
            {" "}
            <i className="bi bi-people-fill"></i> User CRUD
          </h1>
          <div className="mt-2">
            {users.length === 0 ? (
              <p>
                There are no registered users <i className="bi bi-book"></i>
              </p>
            ) : (
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
                        onClick={() => handleEdit(user)}
                        className="text-blue-400 hover:text-blue-500 cursor-pointer"
                      >
                        Edit <i className="bi bi-pencil-square"></i>
                      </button>
                      <button
                        onClick={() => handleDelete(user.id)}
                        className="text-red-400 hover:text-red-500 cursor-pointer"
                      >
                        Delete <i className="bi bi-trash"></i>
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};
