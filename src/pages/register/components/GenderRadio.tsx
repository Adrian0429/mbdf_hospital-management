import React from 'react';

type GenderRadioProps = {
  onChange: (value: string) => void;
};

const GenderRadio = ({ onChange }: GenderRadioProps) => {
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedGender = event.target.value;
    onChange(selectedGender);
  };

  return (
    <div>
      <input
        type="radio"
        className="ml-2 form-radio text-[#156C6D] border-2 border-[#808080] bg-inherit h-5 w-5"
        id="laki-laki"
        value="laki-laki"
        name="gender"
        onChange={handleRadioChange}
      />
      <label htmlFor="laki-laki" className='ml-8'>Laki-laki</label>

      <input 
        type="radio"
        className="ml-40 form-radio text-[#156C6D] border-2 border-[#808080] bg-inherit h-5 w-5"
        id="perempuan"
        value="perempuan"
        name="gender"
        onChange={handleRadioChange}
      />
      <label htmlFor="perempuan" className='ml-8'>Perempuan</label>
    </div>
  );
};

export default GenderRadio;
