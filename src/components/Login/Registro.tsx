import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { addUser, getUsers } from "../../services/userservice"; // Import the addUser and getUsers services
import axios from "axios";

interface RegisterForm {
  uname: string;
  password: string;
}

const Registro = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterForm>();
  const navigate = useNavigate();

  // Register a new user
  const onRegister = async (data: RegisterForm) => {
    try {
      await addUser(data);

      Swal.fire({
        title: "¡Registro exitoso!",
        text: "Tu cuenta ha sido creada correctamente.",
        icon: "success",
      });

      navigate("/dashboard");
    } catch (error) {
      let errorMessage = "Error al registrar el usuario.";
      if (axios.isAxiosError(error) && error.response?.data?.message) {
        errorMessage = error.response.data.message;
      }

      Swal.fire({
        title: "Error!",
        text: errorMessage,
        icon: "error",
      });

      console.error(error);
    }
  };

  // Login a user
  const onLogin = async (data: RegisterForm) => {
    try {
      const users = await getUsers(); // Fetch all users
      const user = users.data.find(
        (u: RegisterForm) => u.uname === data.uname && u.password === data.password
      );

      if (user) {
        Swal.fire({
          title: "¡Inicio de sesión exitoso!",
          text: "Bienvenido de nuevo.",
          icon: "success",
        });

        sessionStorage.setItem("AuthToken", "dummy-token"); // Simulate token storage
        navigate("/dashboard");
      } else {
        Swal.fire({
          title: "Error!",
          text: "Credenciales incorrectas. Verifica tu usuario y contraseña.",
          icon: "error",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Error al iniciar sesión. Intenta más tarde.",
        icon: "error",
      });

      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 to-black">
      <div className="bg-gray-900 text-white rounded-lg shadow-lg flex w-[700px]">
        {/* Login Section */}
        <div className="w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-center">Iniciar sesión</h2>
          <div className="flex justify-center space-x-2 my-4">
            <span className="w-3 h-3 bg-gray-600 rounded-full"></span>
            <span className="w-3 h-3 bg-gray-600 rounded-full"></span>
            <span className="w-3 h-3 bg-gray-600 rounded-full"></span>
          </div>
          <p className="text-sm text-center mb-4">Inicia sesión con tu correo</p>
          <form onSubmit={handleSubmit(onLogin)}>
            <input
              type="text"
              placeholder="Usuario"
              {...register("uname", { required: true })}
              className="w-full p-2 mb-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {errors.uname && <span className="text-red-500 text-xs">El usuario es obligatorio.</span>}
            <input
              type="password"
              placeholder="Contraseña"
              {...register("password", { required: true })}
              className="w-full p-2 mb-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {errors.password && <span className="text-red-500 text-xs">La contraseña es obligatoria.</span>}
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-semibold"
            >
              INICIAR SESIÓN
            </button>
          </form>
        </div>

        {/* Register Section */}
        <div className="w-1/2 bg-black flex flex-col justify-center items-center text-center rounded-r-lg p-8">
          <h2 className="text-2xl font-bold">¡Hola, emprendedor!</h2>
          <p className="text-sm text-gray-300 mt-2">¿Es tu primera vez? Crea una cuenta nueva</p>
          <form onSubmit={handleSubmit(onRegister)} className="w-full">
            <input
              type="text"
              placeholder="Usuario"
              {...register("uname", { required: true, minLength: 6 })}
              className="w-full p-2 mb-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {errors.uname && <span className="text-red-500 text-xs">El usuario debe tener al menos 6 caracteres.</span>}
            <input
              type="password"
              placeholder="Contraseña"
              {...register("password", { required: true })}
              className="w-full p-2 mb-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {errors.password && <span className="text-red-500 text-xs">La contraseña es obligatoria.</span>}
            <button
              type="submit"
              className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 px-6 rounded-lg font-semibold"
            >
              REGISTRARSE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registro;