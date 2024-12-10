// import React, { useState } from "react";
// import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const Login = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [password, setPassword] = useState("");

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Handle login form submission
//     alert("Logged in successfully!");
//   };

//   const handleGoogleLogin = () => {
//     // Logic for Google login integration
//     alert("Google login clicked");
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-2xl text-pink-500 font-bold mb-6 text-center">
//           Login
//         </h2>
//         <form onSubmit={handleLogin}>
//           <div className="mb-4">
//             <label className="block text-gray-700">Email</label>
//             <input
//               type="email"
//               className="w-full px-3 py-2 border rounded-lg"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700">Password</label>
//             <div className="relative">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full px-3 py-2 border rounded-lg"
//                 required
//               />
//               <span
//                 className="absolute right-3 top-3 cursor-pointer"
//                 onClick={togglePasswordVisibility}
//               >
//                 {showPassword ? <FaEyeSlash /> : <FaEye />}
//               </span>
//             </div>
//           </div>

//           <div className="mb-4 text-right">
//             <Link to="/forgot-password" className="text-blue-600">
//               Forgot Password?
//             </Link>
//           </div>

//           <div className="mb-6">
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-2 rounded-lg"
//             >
//               Login
//             </button>
//           </div>

//           <div className="flex items-center justify-center space-x-2 mb-4">
//             <div className="h-px bg-gray-300 w-1/3"></div>
//             <span className="text-gray-500">OR</span>
//             <div className="h-px bg-gray-300 w-1/3"></div>
//           </div>

//           {/* <div className="mb-6">
//             <button
//               type="button"
//               onClick={handleGoogleLogin}
//               className="w-full bg-red-500 text-white py-2 rounded-lg flex justify-center items-center space-x-2"
//             >
//               <img
//                 src="https://www.svgrepo.com/show/355037/google.svg"
//                 alt="Google Icon"
//                 className="w-6 h-6"
//               />
//               <FaGoogle />
//               <span>Login with Google</span>
//             </button>
//           </div> */}

//           <p className="text-center">
//             Don't have an account?{" "}
//             <Link to="/register" className="text-blue-600">
//               Register here
//             </Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;


// import React, { useState } from "react";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

// const Login = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const [errorMessage, setErrorMessage] = useState("");
//   const navigate = useNavigate();

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     console.log("formData",formData);
//     try {
//       const response = await axios.post("http://localhost:5000/login/create", formData);
//       // alert(response.data.message);
//       // localStorage.setItem("token", response.data.token);
//       // navigate("/dashboard"); // Redirect to a dashboard or homepage

//       if(response.data){
//         localStorage.setItem("token", response.data.token);
//         alert(response.data.message);
//         navigate("/");
        
//       }
//       console.log(response.data);
//     } catch (error) {
//       console.error("Error during login:", error); // Log full error object
//       setErrorMessage(error.response?.data?.message || "Login failed. Try again.");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-2xl text-pink-500 font-bold mb-6 text-center">Login</h2>
//         {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
//         <form onSubmit={handleLogin}>
//           <div className="mb-4">
//             <label className="block text-gray-700">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full px-3 py-2 border rounded-lg"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700">Password</label>
//             <div className="relative">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border rounded-lg"
//                 required
//               />
//               <span
//                 className="absolute right-3 top-3 cursor-pointer"
//                 onClick={togglePasswordVisibility}
//               >
//                 {showPassword ? <FaEyeSlash /> : <FaEye />}
//               </span>
//             </div>
//           </div>

//           <div className="mb-6">
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-2 rounded-lg"
//             >
//               Login
//             </button>
//           </div>

//           <p className="text-center">
//             Don't have an account?{" "}
//             <Link to="/register" className="text-blue-600">
//               Register here
//             </Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("formData", formData);
    try {
      const response = await axios.post("http://localhost:5000/login/create", formData);

      if (response.data) {
        localStorage.setItem("token", response.data.token);
        alert(response.data.message);
        navigate("/");
      }
      console.log(response.data);
    } catch (error) {
      console.error("Error during login:", error);
      setErrorMessage(error.response?.data?.message || "Login failed. Try again.");
    }
  };

  const handleClose = () => {
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 via-pink-50 to-purple-100">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md relative transition-transform transform hover:scale-105 duration-300">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition duration-300"
        >
          <FaTimes size={20} />
        </button>

        <h2 className="text-3xl text-pink-500 font-extrabold mb-6 text-center">
          Login
        </h2>
        {errorMessage && (
          <p className="text-red-500 mb-4 text-center font-medium">
            {errorMessage}
          </p>
        )}
        <form onSubmit={handleLogin}>
          {/* Email Input */}
          <div className="mb-6">
            <label className="block text-gray-600 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label className="block text-gray-600 font-semibold">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                required
              />
              <span
                className="absolute right-3 top-3 cursor-pointer text-gray-500 hover:text-blue-500 transition"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          {/* Login Button */}
          <div className="mb-6">
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-lg shadow-lg hover:from-purple-600 hover:to-blue-500 hover:shadow-xl transition duration-300"
            >
              Login
            </button>
          </div>

          {/* Register Link */}
          <p className="text-center text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-blue-600 hover:underline hover:text-blue-800 transition"
            >
              Register here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
