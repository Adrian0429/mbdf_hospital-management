import React, { useState } from 'react';

type InputProps = {
  className?: string;
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
};

function InputBox({ className, value, placeholder, onChange }: InputProps) {
  const [inputValue, setInputValue] = useState(value || '');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);

    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <input  
      className={`py-2 px-6 rounded-xl text-sm font-normal ${className}`}
      value={inputValue}
      placeholder={placeholder}
      onChange={handleInputChange}
    />  
  );
}

export default InputBox;
