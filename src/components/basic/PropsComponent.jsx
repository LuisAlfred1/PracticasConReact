export const PropsComponent = ({ saludo }) => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-xl font-bold">Hola {saludo} 👋🏼</p>
    </div>
  );
};
