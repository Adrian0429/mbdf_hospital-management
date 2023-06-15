import React, { HTMLInputTypeAttribute } from "react";
import { RegisterOptions, useFormContext } from 'react-hook-form';

interface Props {
  placeholder?: string;
  id: string;
  type?: HTMLInputTypeAttribute;
  className?: string;
  value?:string;
}

function Input({
  placeholder,
  id,
  className,
  type,
  value,
}: Props) {
    const{
        register,
    } = useFormContext();
  return (
    <div>
        <input
            {...register(id, {required: "This Field is required"})}
            className={className}
            type={type}
            placeholder={placeholder}
            name={id}
            value={value}
        />
    </div>
  );
}

export default Input;