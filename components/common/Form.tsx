'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Button from './Button';
import Input from './Input';

function Form() {
  const router = useRouter();
  const [isDisabled, setDisabled] = useState(true);
  const [errors, setErrors] = useState({
    name: '',
    email: '',
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  useEffect(() => {
    if (formData.name && formData.email) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [formData]);

  const handleSubmit = (e: any) => {
    const errors = { name: '', email: '' };
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.name.length < 3) {
      errors.name = 'Name must have 3 letters';
    }
    if (!emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (errors.name || errors.email) {
      setErrors((prevData) => ({ ...prevData, ...errors }));
      return;
    }
    router.push('/confirm-mail');
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setErrors((prevData) => ({ ...prevData, [name]: '' }));

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form className="my-20" onSubmit={handleSubmit}>
      <Input
        placeholder="Enter your name"
        name="name"
        onChange={handleChange}
        value={formData.name}
      />
      {errors.name && (
        <p className="text-red-400 text-2xl mb-5 ml-16">
          {errors.name}
        </p>
      )}
      <Input
        placeholder="Enter your email"
        name="email"
        onChange={handleChange}
        value={formData.email}
      />
      {errors.email && (
        <p className="text-red-400 text-2xl mb-5 ml-16">
          {errors.email}
        </p>
      )}
      <Button
        type="primary"
        classes="w-full mt-14"
        disabled={isDisabled}
      >
        Submit
      </Button>
    </form>
  );
}

export default Form;
