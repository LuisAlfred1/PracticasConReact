import { useEffect, useState } from "react";
import { UserForm } from "./UserForm";
import { UserList } from "./UserList";
import { Modal } from "../ui/Modal";
//Componente principal de CRUD que maneja el estado y la lógica de la aplicación, incluye el formulario y la lista de usuarios, aqui es donde se maneja la logica de agregar, editar y eliminar usuarios
export const CrudMain = () => {
  //El estado de users se inicializa con los datos del localStorage si existen, de lo contrario con un array vacío
  const [users, setUsers] = useState(() => {
    const storedUsers = localStorage.getItem("users");
    return storedUsers ? JSON.parse(storedUsers) : [];
  });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState(null);
  //Modificamos el nombre del estado success a successMessage para mayor claridad/semantica
  const [successMessage, setSuccessMessage] = useState(null);
  const [editUserId, setEditUserId] = useState(null);
  //Estado para manejar la visibilidad del modal.
  const [showModal, setShowModal] = useState(false);
  //Estado para almacenar el usuario que se desea eliminar.
  const [userToDelete, setUserToDelete] = useState(null);
  //Estado de búsqueda
  const [search, setSearch] = useState("");

  //Aqui filtramos los usuarios según el término de búsqueda, buscando en nombre y correo electrónico
  const filteredUsers = users.filter((user) => {
    return (
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
    );
  });

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
      setSuccessMessage("User updated successfully!");

      //⬇️ Si no existe editUserId, estamos agregando un nuevo usuario
    } else {
      setUsers((prev) => [...prev, { id: Date.now(), name, email }]);
      setSuccessMessage("User added successfully!");
    }

    setName("");
    setEmail("");
  };

  //Aqui manejamos la apertura del modal de confirmación de eliminación, llenando el estado con el usuario a eliminar
  const OpenDeleteModal = (user) => {
    setUserToDelete(user);
    setShowModal(true);
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

  //Aqui utilizamos useEffect para guardar los usuarios en el localStorage cada vez que la lista de usuarios cambie.
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  //Aqui utilizamos useEffect para limpiar los mensajes de exito y error despues de 3 segundos, por qué useEffect? Porque queremos que este efecto secundario ocurra en respuesta a cambios en los estados de success y errors.
  useEffect(() => {
    if (successMessage || errors) {
      const timer = setTimeout(() => {
        setSuccessMessage(null);
        setErrors(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage, errors]);

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
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
        {errors && (
          <section className="p-4 text-sm text-red-300 bg-red-950 rounded-xl shadow-lg min-w-62.5 border border-red-700">
            {errors}
          </section>
        )}

        {successMessage && (
          <section className="p-4 text-sm text-green-400 bg-green-950 rounded-xl shadow-lg min-w-62.5 border border-green-700">
            {successMessage}
          </section>
        )}
      </div>
      {/*Lado derecho */}
      <main className="p-6 flex-1">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-medium">
            <i className="bi bi-people-fill"></i> User CRUD
          </h1>
          <input
            type="text"
            placeholder="Search user..."
            value={search}
            className="px-3 w-1/3 outline-none border-2 py-2 border-slate-400 rounded-md"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <br />
        <UserList
          //Le pasamos la lista filtrada de usuarios al componente UserList
          users={filteredUsers}
          onEdit={handleEdit}
          onDelete={OpenDeleteModal}
        />
        <Modal
          isOpen={showModal}
          title="Confirm deletion"
          onClose={() => setShowModal(false)}
        >
          <p>
            Are you sure you want to delete{" "}
            <strong>{userToDelete?.name}</strong>?
          </p>

          <div className="flex justify-end gap-3 mt-6">
            <button
              onClick={() => setShowModal(false)}
              className="px-4 py-2 bg-gray-600 rounded hover:bg-gray-700 transition cursor-pointer"
            >
              Cancel
            </button>

            <button
              onClick={() => {
                handleDelete(userToDelete.id);
                setShowModal(false);
              }}
              className="px-4 py-2 bg-red-600 rounded hover:bg-red-700 transition cursor-pointer"
            >
              Delete
            </button>
          </div>
        </Modal>
      </main>
    </div>
  );
};
