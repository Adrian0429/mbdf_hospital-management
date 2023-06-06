import { useForm } from "react-hook-form";

interface AddUserFormProps {
  onAddUser: (data: FormData) => void;
}

const AddUserForm = ({ onAddUser }: AddUserFormProps) => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    onAddUser(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        name="NIK_Pasien"
        placeholder="NIK Pasien"
        ref={register({ required: true })}
      />

      <input
        type="text"
        name="Nama_Pasien"
        placeholder="Nama Pasien"
        ref={register({ required: true })}
      />

      <input
        type="text"
        name="Jenis_Kelamin"
        placeholder="Jenis Kelamin"
        ref={register({ required: true })}
      />

      <input
        type="date"
        name="Tanggal_Lahir"
        placeholder="Tanggal Lahir"
        ref={register({ required: true })}
      />

      <input
        type="text"
        name="No_Telp"
        placeholder="No Telp"
        ref={register({ required: true })}
      />

      <input
        type="email"
        name="Email"
        placeholder="Email"
        ref={register({ required: true })}
      />

      <input
        type="password"
        name="Password"
        placeholder="Password"
        ref={register({ required: true })}
      />

      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUserForm;
