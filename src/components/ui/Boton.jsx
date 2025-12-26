export const Boton = ({texto, onClick}) => {
  return (
    <div>
      <button
        className="px-4 py-2 bg-gray-300 hover:bg-gray-400 transition cursor-pointer"
        onClick={onClick}
      >
        {texto}
      </button>
    </div>
  );
};
