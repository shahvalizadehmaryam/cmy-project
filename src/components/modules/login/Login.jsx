import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import {useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";
const schema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  })

  // Handle form submission
  const onSubmit = async (data) => {
    try {
      console.log(data);
      // Post login data to receive token

      const response = await axios.post(
        "http://127.0.0.1:8000/auth/jwt/create/",
        data,
        {
          headers: {
            "Content-Type": "application/json", // Ensure the correct content type is set
          },
        }
      );
      const token = response.data.access;
      console.log("res", response);
      console.log("token", token);
    } catch (error) {
      console.error("Error during login or subsequent request:", error);
    }
  };
  return (
    <div className="w-full max-w-2xl flex justify-center items-center p-4 sm:p-8">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-full bg-white p-6 "
      >
        <div className="flex flex-col">
          <label className="capitalize font-bold mb-2">Username</label>
          <input
            {...register("username")}
            type="text"
            placeholder="username"
            className="inputStyle  border rounded-md outline-none focus:border-primaryBlue p-2"
          />
          {errors.username && (
            <div className="text-red-600">{errors.username.message}</div>
          )}
        </div>
        <div className="flex flex-col">
          <label className="capitalize font-bold mb-2">Password</label>
          <input
            {...register("password")}
            type="password"
            placeholder="password"
            className="inputStyle border rounded-md outline-none focus:border-primaryBlue  p-2"
          />
          {errors.password && (
            <div className="text-red-600">{errors.password.message}</div>
          )}
        </div>
        <div>
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <input type="checkbox" className="" />
              <label className="font-bold text-sm">Remember Me</label>
            </div>
            <Link>
              <span className="text-primaryBlue text-xs">Forgot Password?</span>
            </Link>
          </div>

          <button
            className="capitalize w-full  rounded-md bg-primaryBlue text-[#fff] py-2"
            type="submit"
          >
            Sign In
          </button>
          <div className="flex items-center justify-center space-x-1 mt-8 text-sm">
            <span>Don't Have An Account?</span>
            <Link>
              <span className="text-primaryBlue">Sign Up</span>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
