import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import imageSrc from "/public/register-kiri.png";
import axios from "axios";
import { useRouter } from "next/router";

type LoginFormInputs = {
  email: string;
  password: string;
};

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const router = useRouter();

  const onSubmit = async (data: LoginFormInputs) => {
    try {
      const response = await axios.post(
        "http://localhost:8888/api/admin/login",
        data
      );
      const token = response.data.data.token; // Assuming the token is returned in the response
      if (token) {
        localStorage.setItem("token", token);
      } else {
        console.log("tokennya ga masuk cuy");
      }
      if (response.data.data.role == "admin") {
        router.push("/adm");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-h-[99vh] flex flex-row">
      <div className="relative w-[38%] bg-[#156C6D] h-[100vh]">
        <Image
          className="relative top-0 h-[100vh]"
          src={imageSrc}
          alt={"register"}
          height={300}
          width={900}
        />
      </div>
      <div className="w-[60%] bg-[#F1FAF9] max-h-[100vh]">
        <div className="text-[#404040] text-3xl font-semibold tracking-tight leading-none ml-16 mt-48 mb-5">
          Masuk untuk Admin
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="text-[#404040] text-lg font-medium tracking-tight leading-none ml-16 mr-8 mt-3 flex flex-col">
            <h1 className="ml-2">Alamat Email</h1>
            <input
              {...register("email", { required: "Email is required" })}
              className="py-2 px-6 rounded-xl text-sm font-normal border border-[#DCD7D7] mt-3 bg-[#F8F7F7] text-black"
            />
            {errors.email && (
              <span className="text-rose-600">{errors.email.message}</span>
            )}
          </div>
          <div className="text-[#404040] text-lg font-medium tracking-tight leading-none ml-16 mr-8 mt-4 flex flex-col">
            <h1 className="ml-2">Password</h1>

            <input
              {...register("password", { required: "Password is required" })}
              className="py-2 px-6 rounded-xl text-sm font-normal border border-[#DCD7D7] mt-3 bg-[#F8F7F7] text-black"
            />
            {errors.password && (
              <span className="text-rose-600">{errors.password.message}</span>
            )}
          </div>
          <div className="text-[#404040] text-lg font-medium tracking-tight leading-none flex flex-col items-center ml-16 mt-6 mr-8 align-middle">
            <div className="text-[#404040] text-lg font-medium tracking-tight leading-none flex items-center w-80">
              <button
                type="submit"
                className="py-2 px-10 rounded-xl text-lg font-semibold bg-[#156C6D] text-white w-80 text-center"
              >
                Masuk
              </button>
            </div>
            <p className="text-gray-500 text-sm mt-3 pl-2">
              Belum memiliki akun?
              <Link
                href={"/register"}
                className="ml-2 text-[#156C6D] font-semibold"
              >
                Daftar Sekarang
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
