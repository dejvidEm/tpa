import React, { useState } from 'react';
import InputField from './InputField';
import Button from './ButtonComponent';

const Form: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    photo: '',
    name: '',
    nationality: '',
    club: '',
    height: '',
    weight: '',
    foot: '',
    position: '',
    birthdate: '',
    link1: '',
    link2: '',
    link3: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <InputField placeholder="Player's email" name="email" value={formData.email} onChange={handleChange} />

      <div className="flex items-center justify-between border-b border-gray-500">
        <InputField
          placeholder="Photo of the Player"
          name="photo"
          value={formData.photo}
          onChange={handleChange}
          className="border-none flex-grow focus:ring-0"
        />
        <span className="text-[18px] leading-[24px] text-heading cursor-pointer hover:underline whitespace-nowrap hidden md:block">
          Upload
        </span>
      </div>

      <InputField placeholder="Name & Surname" name="name" value={formData.name} onChange={handleChange} />
      <InputField placeholder="Nationality" name="nationality" value={formData.nationality} onChange={handleChange} />
      <InputField placeholder="Club" name="club" value={formData.club} onChange={handleChange} />
      <div className="flex space-x-4">
        <InputField placeholder="Height" name="height" value={formData.height} onChange={handleChange} />
        <InputField placeholder="Weight" name="weight" value={formData.weight} onChange={handleChange} />
      </div>
      <div className="flex space-x-4">
        <InputField placeholder="Preferred foot" name="foot" value={formData.foot} onChange={handleChange} />
        <InputField placeholder="Playing position" name="position" value={formData.position} onChange={handleChange} />
      </div>
      <InputField placeholder="Date of birth" name="birthdate" value={formData.birthdate} onChange={handleChange} />
      <InputField placeholder="Link to your video No.1" name="link1" value={formData.link1} onChange={handleChange} />
      <InputField placeholder="Link to your video No.2" name="link2" value={formData.link2} onChange={handleChange} />
      <InputField placeholder="Link to your video No.3" name="link3" value={formData.link3} onChange={handleChange} />
      <Button variant="primary">Submit</Button>
    </form>
  );
};

export default Form;
