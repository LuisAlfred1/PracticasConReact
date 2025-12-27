//Componente de formulario de usuario, recibe props para manejar el estado y el envío del formulario
export const UserForm = ({
  name,
  email,
  setName,
  setEmail,
  onSubmit,
  editUserId,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <h1 className="text-2xl mb-4 font-medium">Form</h1>
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
        className="bg-slate-400 hover:bg-slate-500  text-white py-2 w-full cursor-pointer transition shadow-md"
      >
        {editUserId ? "Update User" : "Add User"}
      </button>
    </form>
  );
};
