import { useEffect, useState } from "react";
import { UserForm } from "./UserForm";
import { UserList } from "./UserList";

//Componente principal de CRUD que maneja el estado y la lógica de la aplicación, incluye el formulario y la lista de usuarios, aqui es donde se maneja la logica de agregar, editar y eliminar usuarios
export const CrudMain = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState(null);
  const [success, setSuccess] = useState(false);
  const [editUserId, setEditUserId] = useState(null);

  //Manejo del submit del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(null);
    if (!name || !email) {
      setErrors("All fields are required.");
      return;
    }

    //Verificar si estamos editando o agregando un nuevo usuario, en este caso usamos el ID del usuario para identificarlo, si existe editUserId, estamos editando.
    if (editUserId) {
      setUsers((prev) =>
        prev.map((user) =>
          user.id === editUserId ? { ...user, name, email } : user
        )
      );
      setEditUserId(null);
      setSuccess(true);

      //⬇️ Si no existe editUserId, estamos agregando un nuevo usuario
    } else {
      setUsers((prev) => [...prev, { id: Date.now(), name, email }]);
      setSuccess(true);
    }

    setName("");
    setEmail("");
  };

  //Manejo de la edición de un usuario, llenamos el formulario con los datos del usuario seleccionado
  const handleEdit = (user) => {
    setEditUserId(user.id);
    setName(user.name);
    setEmail(user.email);
  };

  //Manejo de la eliminación de un usuario, filtramos el usuario por su ID
  const handleDelete = (id) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  //Aqui utilizamos useEffect para limpiar los mensajes de exito y error despues de 3 segundos, por qué useEffect? Porque queremos que este efecto secundario ocurra en respuesta a cambios en los estados de success y errors.
  useEffect(() => {
    if (success || errors) {
      const timer = setTimeout(() => {
        setSuccess(false);
        setErrors(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [success, errors]);

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/*Lado izquierdo */}
      <aside className="p-6 md:w-1/3 lg:w-1/4 w-full bg-slate-700 border-r-2 border-slate-400">
        <UserForm
          name={name}
          email={email}
          setName={setName}
          setEmail={setEmail}
          onSubmit={handleSubmit}
          editUserId={editUserId}
        />
      </aside>
      {errors && (
        <section className="fixed top-4 left-42 p-3 text-sm text-red-300 rounded-xl">
          {errors}
        </section>
      )}
      {success && (
        <section className="fixed top-4 right-4 p-3 text-sm text-green-400 bg-green-950 rounded-xl shadow-lg">
          Action completed successfully! ✅
        </section>
      )}
      {/*Lado derecho */}
      <main className="p-6 flex-1">
        <h1 className="text-2xl mb-4 font-medium">
          <i className="bi bi-people-fill"></i> User CRUD
        </h1>
        <UserList users={users} onEdit={handleEdit} onDelete={handleDelete} />
      </main>
    </div>
  );
};
