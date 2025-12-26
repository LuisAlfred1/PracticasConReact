import { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  //Validaciones
  //1. Validar que los campos sean obligatorios
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    // 1. Campos obligatorios
    if (!email || !password) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    // 2. Longitud mínima
    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    // 3. Email válido
    if (!email.includes("@")) {
      setError("Email no válido.");
      return;
    }

    // 4. Login falso
    if (email === "admin@email.com" && password === "laptop55*") {
      setSuccess(true);
      setEmail("");
      setPassword("");
      return;
    }

    // 5. Si todo falla
    setError("Credenciales incorrectas");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[url('./edific.png')] bg-cover relative">
      <div className="absolute inset-0 bg-black/70 z-0"></div>
      <form onSubmit={handleSubmit} className="max-w-sm p-4 w-full relative z-10">
        <h1 className="text-3xl font-bold text-center">
          Log in to your account
        </h1>
        <div className="mb-4 mt-5">
          <label htmlFor="email" className="block">
            Email
          </label>
          <input
            type="text"
            value={email}
            placeholder="example@gmail.com"
            className="mt-1 w-full outline-none border-2 px-2 py-2 border-gray-500 bg-white/10 backdrop-blur-md"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block">
            Password
          </label>
          <div className="relative flex items-center justify-end">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              placeholder="example@gmail.com"
              className="mt-1 w-full outline-none border-2 px-2 py-2 border-gray-500 bg-white/10 backdrop-blur-md"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute px-3"
            >
              {showPassword ? (
                <i className="bi bi-eye-slash hover:text-gray-300 cursor-pointer"></i>
              ) : (
                <i className="bi bi-eye hover:text-gray-300 cursor-pointer"></i>
              )}
            </button>
          </div>
        </div>
        {error && (
          <section className=" fixed top-4 right-4 text-sm text-red-400 max-w-sm p-3 rounded-xl  bg-red-950 shadow-lg">
            {error} ❌
          </section>
        )}

        {success && (
          <section className=" fixed top-4 right-4 text-sm text-green-400 font-bold max-w-sm p-3 rounded-xl  bg-green-900 shadow-lg">
            Acceso concedido ✅
          </section>
        )}
        <div className="m-2 flex justify-between items-center">
          <div className="flex items-center gap-x-3">
            <input
              type="checkbox"
              id="remember-me-checkbox"
              className="checkbox-item peer hidden"
            />
            <label
              htmlFor="remember-me-checkbox"
              className="relative flex w-5 h-5 bg-white peer-checked:bg-indigo-600 rounded-md border ring-offset-2 ring-indigo-600 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-0.75 after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"
            ></label>
            <span>Remember me</span>
          </div>
          <a
            href="/"
            className="text-center text-indigo-400 hover:text-indigo-500"
          >
            Forgot password?
          </a>
        </div>
        <button className="mt-2 bg-indigo-500 hover:bg-indigo-600 transition cursor-pointer w-full py-2">
          Login
        </button>
        <button className="mt-4 bg-gray-500 hover:bg-gray-600 transition cursor-pointer w-full py-2">
          <i className="bi bi-google"></i> Continue with Google
        </button>
        <p className="text-center mt-4">
          Don't have an account?
          <a
            href="/"
            className="font-medium text-indigo-500 hover:text-indigo-600"
          >
            {" "}
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
};
