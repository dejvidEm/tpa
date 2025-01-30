import React from 'react';

interface InputFieldProps {
  type?: string;
  placeholder: string;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  type = 'text',
  placeholder,
  className,
  value,
  onChange,
  name,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      className={` text-[18px] leading-[24px] w-full px-4 py-4 bg-[#0A2125] text-white placeholder-gray-400 border-b border-gray-600 focus:outline-none focus:border-b-1 focus:border-yellow-500 ${className}`}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputField;