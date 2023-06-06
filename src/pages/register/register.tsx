import { useState } from "react";
import { useForm } from "react-hook-form";

interface FormData {
  NIK_Pasien: string;
  Nama_Pasien: string;
  Jenis_Kelamin: string;
  Tanggal_Lahir: Date | null;
  No_Telp: string;
  Email: string;
  Password: string;
}

const AddUserPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    defaultValues: {
      NIK_Pasien: "",
      Nama_Pasien: "",
      Jenis_Kelamin: "",
      Tanggal_Lahir: null,
      No_Telp: "",
      Email: "",
      Password: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/NewUsers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to add user.");
      }

      setIsLoading(false);
      reset();
    } catch (error: any) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  return (
    <section className="min-h-screen py-40 bg-gray-100">
      <div className="flex flex-row w-3/4 mx-auto bg-white rounded-lg">
        <div className="w-1/2 bg-[url('/assets/pict1.jpg')] bg-cover bg-center">
          <h1>welcome</h1>
          <div>
            <p>hellowe</p>
          </div>
        </div>
        <div className="w-1/2 py-16 px-12">
          <h2 className="text-3xl mb-4">Register</h2>
          <p className="mb-4">fill out your biodata here</p>

          {error && <p>{error}</p>}
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>
              NIK Pasien:
              <input
                type="text"
                {...register("NIK_Pasien", { required: true })}
              />
              {errors.NIK_Pasien && <span>This field is required</span>}
            </label>
            <br />
            <label>
              Nama Pasien:
              <input
                type="text"
                {...register("Nama_Pasien", { required: true })}
              />
              {errors.Nama_Pasien && <span>This field is required</span>}
            </label>
            <br />
            <label>
              Jenis Kelamin:
              <input
                type="text"
                {...register("Jenis_Kelamin", { required: true })}
              />
              {errors.Jenis_Kelamin && <span>This field is required</span>}
            </label>
            <br />
            <label>
              Tanggal Lahir:
              <input
                type="date"
                {...register("Tanggal_Lahir", { required: true })}
              />
              {errors.Tanggal_Lahir && <span>This field is required</span>}
            </label>
            <br />

            <label>
              No Telp:
              <input type="text" {...register("No_Telp", { required: true })} />
              {errors.No_Telp && <span>This field is required</span>}
            </label>
          
            <label>
              Email:
              <input type="email" {...register("Email", { required: true })} />
              {errors.Email && <span>This field is required</span>}
            </label>

            <label>
              Password:
              <input
                type="password"
                {...register("Password", { required: true })}
              />
              {errors.Password && <span>This field is required</span>}
            </label>

            <button type="submit" disabled={isLoading}>
              {isLoading ? "Adding user..." : "Add User"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddUserPage;
